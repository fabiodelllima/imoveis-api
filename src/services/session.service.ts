import User from '../entities/User.entity';
import AppError from '../errors/AppError.error';
import { sign } from 'jsonwebtoken';
import { compare } from 'bcryptjs';
import { userRepo } from '../repositories';
import {
  TUserLogin,
  TUserLoginReturn,
} from '../interfaces/users.interface';

export const loginService = async (
  data: TUserLogin
): Promise<TUserLoginReturn> => {
  const { email } = data;
  const user: User | null = await userRepo.findOneBy({ email });

  if (!user) throw new AppError('Invalid credentials', 401);

  const comparePass = await compare(
    data.password,
    user.password
  );

  if (!comparePass)
    throw new AppError('Invalid credentials', 401);

  const token: string = sign(
    {
      email: user.email,
      admin: user.admin,
    },
    process.env.SECRET_KEY!,
    {
      subject: user.id.toString(),
      expiresIn: process.env.EXPIRES_IN,
    }
  );

  return { token };
};
