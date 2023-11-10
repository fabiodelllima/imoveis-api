import { z } from 'zod';
import {
  createCategorySchema,
  readAllCategoriesSchema,
} from '../schemas/categories.schema';

export type TCreateCategory = z.infer<
  typeof createCategorySchema
>;

export type TReadAllCategories = z.infer<
  typeof readAllCategoriesSchema
>;
