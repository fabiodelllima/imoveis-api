import { Request, Response } from 'express';
import {
  createUserService,
  readAllUsersService,
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
