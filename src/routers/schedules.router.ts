import { Router } from 'express';
import {
  createScheduleController,
  readAllSchedulesByRealEstateController,
} from '../controllers/schedules.controller';
import { createNewSchedule } from '../schemas/schedules.schema';
import {
  verifyRealEstateExists,
  verifyRealEstateScheduleExists,
  verifyUserScheduleExists,
} from '../middlewares/schedules.middleware';
import {
  validateBody,
  verifyAdmin,
  verifyToken,
} from '../middlewares/globals.middleware';

export const scheduleRouter: Router = Router();

scheduleRouter.post(
  '/',
  verifyToken,
  validateBody(createNewSchedule),
  verifyRealEstateExists,
  verifyRealEstateScheduleExists,
  verifyUserScheduleExists,
  createScheduleController
);

