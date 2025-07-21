import { applyDecorators, UseGuards } from "@nestjs/common";
import { UserRole } from "../interfaces/user-role.interface";
import { RolesProtectes } from "./rol-protected.decorator";
import { AuthGuard } from "@nestjs/passport";
import { UserRoleGuard } from "../guards/user-rol/user-rol.guard";

export function Auth(...roles: UserRole[]){
    return applyDecorators(
        RolesProtectes(...roles),
        UseGuards(AuthGuard(), UserRoleGuard),
    )
}