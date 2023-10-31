import { z } from 'zod';
import { createCategorySchema } from '../schemas/categories.schama';

export type TCreateCategory = z.infer<
  typeof createCategorySchema
>;
