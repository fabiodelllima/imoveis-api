import { z } from 'zod';
import { createRealEstateSchema } from '../schemas/realEstates.schema';

export type TCreateRealEstate = z.infer<
  typeof createRealEstateSchema
>;
