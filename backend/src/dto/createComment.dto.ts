import { Comment } from "@prisma/client";
import { IsNotEmpty } from "class-validator";

class CreateCommentDto implements Omit<Comment, 'id' | 'createdAt' | 'userId' | 'submissionId'> {
  @IsNotEmpty()
  content!: string;
}

export default CreateCommentDto;