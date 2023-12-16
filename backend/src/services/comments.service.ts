import createHttpError from "http-errors";
import prisma from "../db";
import { Comment } from "@prisma/client";
import CreateCommentDto from "../dto/createComment.dto";

const getAll = async (): Promise<Comment[]> => {
  const comments = await prisma.comment.findMany();
  return comments;
};

const getById = async (id: string): Promise<Comment> => {
  const comment = await prisma.comment.findUnique({
    where: {
      id,
    },
  });

  if (!comment) throw new createHttpError.NotFound("Comment not found");
  return comment;
};

const deleteById = async (id: string) => {
  await prisma.comment.delete({
    where: {
      id,
    },
  });
};

const create = async (data: CreateCommentDto, userId: string, submissionId: string) => {
  const { content } = data;
  const newComment = await prisma.comment.create({
    data: {
      content,
      userId,
      submissionId,
    },
  });
  return newComment;
};

export default {
  getAll,
  getById,
  deleteById,
  create,
};
