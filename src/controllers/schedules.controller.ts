import { Request, Response } from 'express';
import { createScheduleService } from '../services/schedules.service';

export const createScheduleController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { sub } = res.locals.decoded;
  await createScheduleService(req.body, sub);

  return res.status(201).json({ message: 'Schedule created' });
};
