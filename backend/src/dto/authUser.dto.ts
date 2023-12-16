import { IsEmail, IsNotEmpty } from "class-validator";
import { User } from "@prisma/client";


class AuthUserDto implements Pick<User, 'email' | 'password'> {
  @IsNotEmpty()
  @IsEmail()
  email!: string;
  
  @IsNotEmpty()
  password!: string;
}

export default AuthUserDto;