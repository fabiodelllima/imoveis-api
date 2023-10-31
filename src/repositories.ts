import { Repository } from 'typeorm';
import Schedule from './entities/Schedule.entity';
import { AppDataSource } from './data-source';
import RealEstate from './entities/RealEstate.entity';

export const scheduleRepo: Repository<Schedule> =
  AppDataSource.getRepository(Schedule);

export const realEstateRepo: Repository<RealEstate> =
  AppDataSource.getRepository(RealEstate);


// [?] export const scheduleRepo: TScheduleRepo = AppDataSource.getRepository(Schedule); [?] 
