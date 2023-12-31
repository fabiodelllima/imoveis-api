import { RealEstate, User } from '../entities';
import AppError from '../errors/AppError.error';
import {
  realEstateRepo,
  scheduleRepo,
  userRepo,
} from '../repositories';
import { TCreateSchedule } from './../interfaces/schedules.interface';

export const createScheduleService = async (
  data: TCreateSchedule,
  userId: number
): Promise<void> => {
  const newDate = new Date(data.date).getDay();
  const time = Number(data.hour.split(':')[0]);

  if (newDate === 0 || newDate === 6)
    throw new AppError(
      'Invalid date, work days are monday to friday',
      400
    );

  if (time < 8 || time > 18)
    throw new AppError(
      'Invalid hour, available times are 8AM to 18PM',
      400
    );

  const { realEstateId, ...rest } = data;

  const realEstate: RealEstate | null =
    await realEstateRepo.findOneBy({
      id: realEstateId,
    });

  const user: User | null = await userRepo.findOneBy({
    id: userId,
  });

  await scheduleRepo.save({
    ...rest,
    realEstate: realEstate!,
    user: user!,
  });
};

export const readAllSchedulesByRealEstateService = async (
  id: number
): Promise<RealEstate> => {
  const realEstate: RealEstate | null =
    await realEstateRepo.findOne({
      where: {
        id,
      },
      relations: {
        schedules: {
          user: true,
        },
        address: true,
        category: true,
      },
    });

  if (!realEstate)
    throw new AppError('RealEstate not found', 404);

  return realEstate;
};
