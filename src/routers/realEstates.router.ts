import { Router } from 'express';
import { createRealEstateController } from '../controllers/realEstates.controller';
import { validateBody } from '../middlewares/globals.middleware';
import { createRealEstateSchema } from '../schemas/realEstates.schema';

export const realEstateRouter: Router = Router();

realEstateRouter.post(
  '/',
  validateBody(createRealEstateSchema),
  createRealEstateController
);
