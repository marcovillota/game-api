import { PassportStrategy } from "@nestjs/passport";
import { InjectModel } from "@nestjs/sequelize";
import { ExtractJwt, Strategy } from "passport-jwt";
import { User } from "../entities/user.entity";
import { ConfigService } from "@nestjs/config";
import { envs } from "src/config/envs";
import { JwtPayLoad } from "../interfaces/jwt_payload.interface";
import { UnauthorizedException } from "@nestjs/common";


export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(

        @InjectModel(User)
        private readonly userModel: typeof User,
        private readonly configService: ConfigService,
    ) {
        super({
            secretOrKey: configService.get('JWT_SECRET') || envs.JWT_SECRET,
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        })
    }

    async validate(payload: JwtPayLoad) {
        const { id } = payload;
        const user = await this.userModel.findOne({
            where: {
                id: id,
            }

        });
        if (!user) {
            throw new UnauthorizedException('Token not valid');
        }
        if (!user.isActive) {
            throw new UnauthorizedException('User is not active, contact administrator');
        }
        return user;
    }
}
