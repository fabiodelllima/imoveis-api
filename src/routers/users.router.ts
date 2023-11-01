import { Router } from 'express';
import { createUserController } from '../controllers/users.controller';
import { validateBody } from '../middlewares/globals.middleware';
import { createUserSchema } from '../schemas/users.schema';

export const userRouter: Router = Router();

userRouter.post(
  '/',
  validateBody(createUserSchema),
  createUserController
);
