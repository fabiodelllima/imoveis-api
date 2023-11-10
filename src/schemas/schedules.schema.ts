import { z } from 'zod';

export const scheduleSchema = z.object({
  id: z.number(),
  date: z.string(),
  hour: z.string(),
  realEstateId: z.number().positive().int(),
  userId: z.number().positive().int(),
});

export const createNewSchedule = scheduleSchema.omit({
  id: true,
  userId: true,
});
