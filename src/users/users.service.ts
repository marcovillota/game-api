import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';
import { Game } from 'src/games/entities/game.entity';

@Injectable()
export class UsersService {

  private readonly logger = new Logger('UsersService');

  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) { }

  async create(createUserDto: CreateUserDto) {
    const { fullname, email } = createUserDto;
    try {
      const newUser = this.userModel.create({
        fullname: fullname,
        email: email,
        isActive: true,
      });
      return newUser;

    } catch (error) {
      this.handleDBExceptions(error);
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



  private handleDBExceptions(error: any) {
    if (error.parent?.code === '23505') {
      throw new BadRequestException(error.detail);
    }
    this.logger.error(error);
    throw new InternalServerErrorException('Something went very wrong');
  }
}
