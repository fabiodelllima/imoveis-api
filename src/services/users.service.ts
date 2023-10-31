import User from '../entities/User.entity';
import {
  TUserCreate,
  TUserReturn,
} from '../interfaces/users.interface';
import { userRepo } from '../repositories';
import { userReturnSchema } from '../schemas/users.schema';

export const createUserService = async (
  data: TUserCreate
): Promise<TUserReturn> => {
  const user: User = userRepo.create(data);

  await userRepo.save(user);

  return userReturnSchema.parse(user);
};
