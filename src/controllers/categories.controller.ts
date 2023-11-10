import { Request, Response } from 'express';
import {
  createCategoryService,
  readAllCategoriesService,
  readRealEstateByCategoryService,
} from '../services/categories.service';

export const createCategoryController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newCategory = await createCategoryService(req.body);

  return res.status(201).json(newCategory);
};

export const readAllCategoriesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const allCategories = await readAllCategoriesService();

  return res.status(200).json(allCategories);
};

export const readRealEstateByCategoryController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;

  const realEstate = await readRealEstateByCategoryService(
    Number(id)
  );

  return res.status(200).json(realEstate);
};
