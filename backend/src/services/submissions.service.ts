import createHttpError from "http-errors";
import prisma from "../db";
import { Submission } from "@prisma/client";
import createSubmissionDto from "../dto/createSubmission.dto";

const getAll = async (): Promise<Submission[]> => {
  const submissions = await prisma.submission.findMany({
    include: {
      user: {
        select: {
          id: true,
          email: true,
          role: true,
          username: true,
          profileImage: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return submissions;
};

const getById = async (id: string): Promise<Submission> => {
  const submission = await prisma.submission.findUnique({
    where: {
      id,
    },
    include: {
      user: {
        select: {
          id: true,
          email: true,
          role: true,
          username: true,
          profileImage: true,
        },
      },
    },
  });

  if (!submission) throw createHttpError.NotFound("Submission not found");
  return submission;
};

const create = async (
  data: createSubmissionDto,
  userId: string
): Promise<Submission> => {
  const { title, description, pictureBefore, pictureAfter, lat, lng } = data;
  const newSubmission = await prisma.submission.create({
    data: {
      title,
      description,
      pictureBefore,
      pictureAfter,
      userId,
      lat,
      lng,
    },
  });
  return newSubmission;
};

const deleteById = async (id: string) => {
  await prisma.submission.delete({
    where: {
      id,
    },
  });
};

export default {
  getAll,
  getById,
  create,
  deleteById,
};
