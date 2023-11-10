import User from '../entities/User.entity';
import { userRepo } from '../repositories';
import {
  TUserCreate,
  TUserReadReturn,
  TUserReturn,
  TUserUpdate,
} from '../interfaces/users.interface';
import {
  userReturnListSchema,
  userReturnSchema,
} from '../schemas/users.schema';

export const createUserService = async (
  data: TUserCreate
): Promise<TUserReturn> => {
  const newUser: User = userRepo.create(data);

  await userRepo.save(newUser);

  return userReturnSchema.parse(newUser);
};

export const readAllUsersService =
  async (): Promise<TUserReadReturn> => {
    const allUsers: User[] = await userRepo.find();

    return userReturnListSchema.parse(allUsers);
  };

export const updateUserService = async (
  data: TUserUpdate,
  user: User
): Promise<TUserReturn> => {
  const userUpdate: User = userRepo.create({ ...user, ...data });

  await userRepo.save(userUpdate);

  return userReturnSchema.parse(userUpdate);
};

export const deleteUserService = async (
  user: User
): Promise<void> => {
  await userRepo.softRemove(user);
};
