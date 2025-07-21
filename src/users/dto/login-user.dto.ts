import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class LoginUserDto{
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @MinLength(4)
  password: string;
}

