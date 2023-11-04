import { Request, Response } from 'express';
import { createCategoryService } from '../services/categories.service';

export const createCategoryController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const category = await createCategoryService(req.body);

  return res.status(201).json(category);
};
