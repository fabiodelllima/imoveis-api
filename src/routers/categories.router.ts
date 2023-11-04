import { Router } from 'express';
import { createCategoryController } from '../controllers/categories.controller';
import { createCategorySchema } from '../schemas/categories.schema';
import { validateBody } from '../middlewares/globals.middleware';

export const categoryRouter: Router = Router();

categoryRouter.post(
  '/',
  validateBody(createCategorySchema),
  createCategoryController
);

categoryRouter.get('/');
