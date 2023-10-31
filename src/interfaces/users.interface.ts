import { z } from 'zod';
import {
  createUserSchema,
  userLoginSchema,
  userReturnSchema,
} from '../schemas/users.schema';
import { DeepPartial } from 'typeorm';

export type TUserCreate = z.infer<typeof createUserSchema>;
export type TUserBodyUpdate = Omit<TUserCreate, 'admin'>;
export type TUserUpdate = DeepPartial<TUserBodyUpdate>;
export type TUserReturn = z.infer<typeof userReturnSchema>;
export type TUserLogin = z.infer<typeof userLoginSchema>;
export type TUserLoginReturn = { token: string };
