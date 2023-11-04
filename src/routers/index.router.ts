import { Router } from 'express';
import { userRouter } from './users.router';
import { loginRouter } from './session.router';
import { categoryRouter } from './categories.router';
import { realEstateRouter } from './realEstates.router';

export const routes: Router = Router();

routes.use('/users', userRouter);
routes.use('/login', loginRouter);
routes.use('/categories', categoryRouter);
routes.use('/realEstate', realEstateRouter);
