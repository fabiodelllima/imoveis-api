import { NextFunction, Request, Response } from 'express';
import { RealEstate, Schedule } from '../entities';
import { realEstateRepo, scheduleRepo } from '../repositories';
import AppError from '../errors/AppError.error';

export const verifyRealEstateExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { realEstateId } = req.body;

  const realEstate: RealEstate | null =
    await realEstateRepo.findOne({
      where: {
        id: Number(realEstateId),
      },
    });

  if (!realEstate)
    throw new AppError('Real Estate not found', 404);

  return next();
};

export const verifyRealEstateScheduleExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { realEstateId, hour, date } = req.body;

  const schedule: Schedule | null = await scheduleRepo.findOne({
    where: {
      realEstate: {
        id: Number(realEstateId),
      },
      hour,
      date,
    },
  });

  if (schedule)
    throw new AppError(
      'Schedule to this real estate at this date and time already exists',
      409
    );

  return next();
};

export const verifyUserScheduleExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { hour, date } = req.body;

  let { sub } = res.locals.decoded;
  sub = Number(sub);

  const schedule: Schedule | null = await scheduleRepo.findOne({
    where: {
      user: {
        id: sub,
      },
      date,
      hour,
    },
  });

  if (schedule)
    throw new AppError(
      'User schedule to this real estate at this date and time already exists',
      409
    );

  return next();
};
