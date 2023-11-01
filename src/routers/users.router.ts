import { Router } from 'express';
import {
  validateBody,
  verifyAdmin,
  verifyToken,
} from '../middlewares/globals.middleware';
import { createUserSchema } from '../schemas/users.schema';
import {
  createUserController,
  readAllUsersController,
} from '../controllers/users.controller';

export const userRouter: Router = Router();

userRouter.post(
  '/',
  validateBody(createUserSchema),
  createUserController
);

userRouter.get(
  '/',
  verifyToken,
  verifyAdmin,
  readAllUsersController
);
