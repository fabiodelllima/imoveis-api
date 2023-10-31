import { z } from 'zod';

export const scheduleSchema = z.object({
  id: z.number(),
  date: z.date(),
  hour: z.number(),
  realEstateId: z.number().positive().int(),
  userId: z.number().positive().int(),
});
