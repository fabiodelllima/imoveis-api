import { Router } from 'express';
import { userRouter } from './users.router';

export const routes: Router = Router();

routes.use('/users', userRouter);
