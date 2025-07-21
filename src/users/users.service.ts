import { BadRequestException, Injectable, InternalServerErrorException, Logger, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';
import { Game } from 'src/games/entities/game.entity';
import * as bcrypt from 'bcrypt';
import { UserRole } from './interfaces/user-role.interface';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtPayLoad } from './interfaces/jwt_payload.interface';
import { JwtService } from '@nestjs/jwt';



@Injectable()
export class UsersService {

  private readonly logger = new Logger('UsersService');

  constructor(
    @InjectModel(User)
    private userModel: typeof User,
    private readonly jwtService: JwtService,
  ) { }

  async create(createUserDto: CreateUserDto) {
    const { fullname, email, password } = createUserDto;
    try {
      const newUser = await this.userModel.create({
        fullname: fullname,
        email: email,
        password: bcrypt.hashSync(password, 12),
        rol: [UserRole.PLAYER],
      });

      // No incluir la contraseña en la respuesta
      const { password: _, ...user } = newUser.toJSON();

      return {
        user,
        token: this.getJwtToken({ id: user.id }),
      };

    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async login(LoginUserDto: LoginUserDto){
    
    const {email, password} = LoginUserDto;
    const user = await this.userModel.findOne({
      where: {
        email: email,
        isActive: true,
      },
      // Nos aseguramos de que la contraseña se incluya en el resultado
      attributes: { include: ['password'] }
    });
    if(!user){
      throw new UnauthorizedException('Invalid credentials');
    }
    if(!bcrypt.compareSync(password, user.password)){
      throw new UnauthorizedException('Invalid credentials');
    }
    return{
      token: this.getJwtToken({
        id: user.id,
      }),
      user:{
        id: user.id,
        fullname: user.fullname,
        email: user.email,

      }
    }


  }
  async findAll() {
    const users = await this.userModel.findAll({
      where: {
        isActive: true,
      },
      include:[
       {
        model: Game,
        as: 'games',
        through: {
          attributes: [],
        }
       }
      ]
    });
    return users;
  }

  async findOne(id: number) {

    const user = await this.userModel.findOne({
      where: {
        id: id,
      },
      
    })
    if (!user) {
      throw new BadRequestException(`User with id ${id} not found`);
    }
    return user;
  }

  private getJwtToken(payload: JwtPayLoad) {
   return this.jwtService.sign(payload);
  }


  private handleDBExceptions(error: any) {
    if (error.parent?.code === '23505') {
      throw new BadRequestException(error.detail);
    }
    this.logger.error(error);
    throw new InternalServerErrorException('Something went very wrong');
  }
}
