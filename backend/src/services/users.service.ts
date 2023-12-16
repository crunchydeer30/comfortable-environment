import { User } from '@prisma/client';
import prisma from '../db';
import CreateUserDto from '../dto/createUser.dto';
import { hashPassword } from '../utils/auth';
import createHttpError from 'http-errors';

const getAll = async (): Promise<User[]> => {
  const users = await prisma.user.findMany();
  return users;
};

const getById = async (id: string): Promise<User> => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    }
  });

  if (!user) throw new createHttpError.NotFound('User not found');

  return user;
};

const getByEmail = async (email: string): Promise<User> => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) throw new createHttpError.NotFound('User not found');

  return user;
};

const create = async (data: CreateUserDto) => {
  const { username, password, email, profileImage } = data;
  const newUser = await prisma.user.create({
    data: {
      username,
      password: await hashPassword(password),
      email,
      profileImage: profileImage,
    },
  });
  return newUser;
};

const deleteById = async (id: string) => {
  const userToDelete = await getById(id);

  if (!userToDelete) throw new createHttpError.NotFound('User not found');

  await prisma.user.delete({
    where: {
      id,
    },
  });
};

export default {
  getAll,
  getById,
  getByEmail,
  create,
  deleteById,
};
