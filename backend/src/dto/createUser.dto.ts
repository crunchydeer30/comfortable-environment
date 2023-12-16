import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";
import { User } from "@prisma/client";

class CreateUserDto implements Omit<User, "id" | "role"> {
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(25)
  username!: string;

  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(25)
  password!: string;

  @IsNotEmpty()
  @IsEmail()
  email!: string;

  profileImage!: string | null;
}

export default CreateUserDto;
