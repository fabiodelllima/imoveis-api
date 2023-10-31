import { Request, Response } from 'express';
import { createUserService } from '../services/users.service';
import { TUserReturn } from '../interfaces/users.interface';

export const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user: TUserReturn = await createUserService(req.body);

  return res.status(201).json(user);
};
