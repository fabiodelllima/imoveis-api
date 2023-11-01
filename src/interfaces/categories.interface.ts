import { z } from 'zod';
import {
  createCategorySchema,
  readAllCategoriesSchema,
} from '../schemas/categories.schema';

export type TCreateCategory = z.infer<
  typeof createCategorySchema
>;

export type ReadAllCategories = z.infer<
  typeof readAllCategoriesSchema
>;
