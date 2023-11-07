import { Router } from 'express';
import {
  createCategoryController,
  readAllCategoriesController,
  readRealEstateByCategoryController,
} from '../controllers/categories.controller';
import { createCategorySchema } from '../schemas/categories.schema';
import {
  validateBody,
  verifyAdmin,
  verifyToken,
} from '../middlewares/globals.middleware';
import { verifyCategoryName } from '../middlewares/categories.middleware';

export const categoryRouter: Router = Router();

categoryRouter.post(
  '/',
  verifyToken,
  verifyAdmin,
  validateBody(createCategorySchema),
  verifyCategoryName,
  createCategoryController
);

categoryRouter.get('/', readAllCategoriesController);

categoryRouter.get(
  '/:id/realEstate',
  readRealEstateByCategoryController
);
