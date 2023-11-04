import { Router } from 'express';
import { createCategoryController } from '../controllers/categories.controller';
import { createCategorySchema } from '../schemas/categories.schema';
import {
  validateBody,
  verifyAdmin,
  verifyToken,
} from '../middlewares/globals.middleware';

export const categoryRouter: Router = Router();

categoryRouter.post(
  '/',
  validateBody(createCategorySchema),
  verifyToken,
  verifyAdmin,
  createCategoryController
);

