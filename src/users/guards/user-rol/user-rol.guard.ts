import{
CanActivate,
ExecutionContext,
ForbiddenException,
Injectable,
UnauthorizedException
}from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { User } from 'src/users/entities/user.entity';
import { META_ROLES } from "src/users/decorators/rol-protected.decorator";

@Injectable()
export class UserRoleGuard implements CanActivate {
    constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    
    const validRoles: string[] = this.reflector.get(
      META_ROLES,
      context.getHandler(),
    );
    if (!validRoles || validRoles.length === 0) return true;
    const req = context.switchToHttp().getRequest();
    const user = req.user as User;
    if (!user) throw new UnauthorizedException('User not found');
    for (const role of user.rol) {
      if (validRoles.includes(role)) {
        return true;
      }
    }
    throw new ForbiddenException('User does not have permission')

  }
    
}