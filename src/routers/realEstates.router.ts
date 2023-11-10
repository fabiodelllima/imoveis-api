import { Router } from 'express';
import {
  createRealEstateController,
  readAllRealEstatesController,
} from '../controllers/realEstates.controller';
import {
  validateBody,
  verifyAdmin,
  verifyToken,
} from '../middlewares/globals.middleware';
import { createRealEstateSchema } from '../schemas/realEstates.schema';
import { verifyRealEstateAddressExists } from '../middlewares/realEstates.middleware';

export const realEstateRouter: Router = Router();

realEstateRouter.post(
  '/',
  verifyToken,
  verifyAdmin,
  validateBody(createRealEstateSchema),
  verifyRealEstateAddressExists,
  createRealEstateController
);

realEstateRouter.get('/', readAllRealEstatesController);
