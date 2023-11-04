import { Request, Response } from 'express';
import { createRealEstateService } from '../services/realEstates.service';

export const createRealEstateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const realEstate = await createRealEstateService(req.body);

  return res.status(201).json(realEstate);
};
