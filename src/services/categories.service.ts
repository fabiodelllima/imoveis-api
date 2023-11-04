import { TReadAllCategories } from './../interfaces/categories.interface';
import Category from '../entities/Category.entity';
import { TCreateCategory } from '../interfaces/categories.interface';
import { categoryRepo } from '../repositories';

export const createCategoryService = async (
  data: TCreateCategory
): Promise<Category> => {
  return await categoryRepo.save(data);
};

export const readAllCategoriesService =
  async (): Promise<TReadAllCategories> => {
    return await categoryRepo.find();
  };
