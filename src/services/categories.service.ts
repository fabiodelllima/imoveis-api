import { TReadAllCategories } from './../interfaces/categories.interface';
import Category from '../entities/Category.entity';
import { TCreateCategory } from '../interfaces/categories.interface';
import { categoryRepo } from '../repositories';
import AppError from '../errors/AppError.error';

export const createCategoryService = async (
  data: TCreateCategory
): Promise<Category> => {
  return await categoryRepo.save(data);
};

export const readAllCategoriesService =
  async (): Promise<TReadAllCategories> => {
    return await categoryRepo.find();
  };

export const readRealEstateByCategoryService = async (
  id: number
): Promise<Category> => {
  const category: Category | null = await categoryRepo.findOne({
    where: {
      id,
    },
    relations: {
      realEstate: true,
    },
  });

  if (!category) throw new AppError('Category not found', 404);

  return category;
};
