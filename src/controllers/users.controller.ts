import { Request, Response } from 'express';
import {
  createUserService,
  readAllUsersService,
  updateUserService,
} from '../services/users.service';
import { TUserReturn } from '../interfaces/users.interface';

export const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user: TUserReturn = await createUserService(req.body);

  return res.status(201).json(user);
};

export const readAllUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const allUsers = await readAllUsersService();

  return res.status(200).json(allUsers);
};

export const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { user } = res.locals;
  const newUser = await updateUserService(req.body, user);

  return res.status(200).json(newUser);
};

