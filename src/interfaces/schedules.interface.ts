import { z } from 'zod';
import { createNewSchedule } from '../schemas/schedules.schema';

export type TCreateSchedule = z.infer<typeof createNewSchedule>;

// export type TScheduleRepo = Repository<Schedule>;
