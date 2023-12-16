/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from "express";
import usersService from "../services/users.service";
import CreateUserDto from "../dto/createUser.dto";
import { validateDto } from "../utils/validation";
import { auth } from "../utils/middleware";

const usersRouter = Router();

usersRouter.get("/", auth.optional, async (_req, res, next) => {
  try {
    const users = await usersService.getAll();
    return res.status(200).json(users);
  } catch (e) {
    return next(e);
  }
});

usersRouter.get("/:id", auth.optional, async (req, res, next) => {
  try {
    const user = await usersService.getById(req.params.id);
    return res.status(200).json(user);
  } catch (e) {
    return next(e);
  }
});

usersRouter.post(
  "/",
  validateDto(CreateUserDto),
  async (req, res, next) => {
    const data = req.body as CreateUserDto;
    try {
      const newUser = await usersService.create(data);
      return res.status(201).json(newUser);
    } catch (e) {
      return next(e);
    }
  }
);

usersRouter.delete("/:id", auth.admin, async (req, res, next) => {
  const { id } = req.params;

  try {
    await usersService.deleteById(id);
    return res.status(204).end();
  } catch (e) {
    return next(e);
  }
});

export default usersRouter;
