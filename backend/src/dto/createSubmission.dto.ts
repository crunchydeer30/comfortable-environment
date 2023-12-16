import { Submission } from "@prisma/client";
import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

class CreateSubmissionDto implements Omit<Submission, 'id' | 'createdAt' | 'likes' | 'userId'> {
  @IsNotEmpty()
  @MaxLength(60)
  title!: string;

  @IsNotEmpty()
  @MaxLength(500)
  description!: string;

  @IsNotEmpty()
  @IsString()
  pictureBefore!: string;

  @IsNotEmpty()
  @IsString()
  pictureAfter!: string;

  @IsNotEmpty()
  @IsNumber()
  lat!: number;

  @IsNotEmpty()
  @IsNumber()
  lng!: number;
}

export default CreateSubmissionDto;