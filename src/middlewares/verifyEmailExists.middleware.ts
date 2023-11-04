import { NextFunction, Request, Response } from 'express';
import { User } from '../entities';
import { userRepo } from '../repositories';
import AppError from '../errors/AppError.error';

export const verifyEmailExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { email } = req.body;
  const user: User | null = await userRepo.findOneBy({ email });

  if (user) throw new AppError('Email already exists', 409);

  return next();
};
