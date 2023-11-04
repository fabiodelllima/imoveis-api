import { z } from 'zod';

export const realEstateSchema = z.object({
  id: z.number().positive(),
  sold: z.boolean().default(false),
  value: z.number().or(z.string()),
  size: z.number(),
  createdtAt: z.string(),
  updatedAt: z.string(),
  address: z.object({
    street: z.string().max(45),
    zipCode: z.string().max(8),
    number: z.number(),
    city: z.string().max(20),
    state: z.string().max(2),
  }),
  categoryName: z.string().max(45),
});

export const createRealEstateSchema = realEstateSchema.omit({
  id: true,
  createdtAt: true,
  updatedAt: true,
});
