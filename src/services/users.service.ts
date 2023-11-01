import User from '../entities/User.entity';
import { userRepo } from '../repositories';
import {
  TUserCreate,
  TUserReadReturn,
  TUserReturn,
} from '../interfaces/users.interface';
import {
  userReturnListSchema,
  userReturnSchema,
} from '../schemas/users.schema';

export const createUserService = async (
  data: TUserCreate
): Promise<TUserReturn> => {
  const user: User = userRepo.create(data);

  await userRepo.save(user);

  return userReturnSchema.parse(user);
};

export const readAllUsersService =
  async (): Promise<TUserReadReturn> => {
    const allUsers: User[] = await userRepo.find();

    return userReturnListSchema.parse(allUsers);
  };
