import { Repository } from 'typeorm';
import Schedule from './entities/Schedule.entity';
import { AppDataSource } from './data-source';

export const scheduleRepo: Repository<Schedule> =
  AppDataSource.getRepository(Schedule);

// export const scheduleRepo: TScheduleRepo = AppDataSource.getRepository(Schedule);
