import { Router } from 'express';
import { verifyUserExists } from '../middlewares/users.middleware';
import {
  validateBody,
  verifyAdmin,
  verifyPermissions,
  verifyToken,
} from '../middlewares/globals.middleware';
import {
  createUserSchema,
  updateUserSchema,
} from '../schemas/users.schema';
import {
  createUserController,
  readAllUsersController,
  updateUserController,
  deleteUserController,
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

userRouter.patch(
  '/:id',
  validateBody(updateUserSchema),
  verifyToken,
  verifyUserExists,
  verifyPermissions,
  updateUserController
);

userRouter.delete(
  '/:id',
  verifyToken,
  verifyUserExists,
  verifyAdmin,
  deleteUserController
);
