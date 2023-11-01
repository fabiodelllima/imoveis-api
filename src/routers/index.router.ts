import { Router } from 'express';
import { userRouter } from './users.router';
import { loginRouter } from './session.router';

export const routes: Router = Router();

routes.use('/users', userRouter);
routes.use('/login', loginRouter);
