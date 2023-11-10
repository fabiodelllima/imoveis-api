import { Address, Category, RealEstate } from '../entities';
import AppError from '../errors/AppError.error';
import { TCreateRealEstate } from '../interfaces/realEstates.interface';
import {
  addressRepo,
  categoryRepo,
  realEstateRepo,
} from '../repositories';

export const createRealEstateService = async (
  data: TCreateRealEstate
): Promise<RealEstate> => {
  const category: Category | null = await categoryRepo.findOneBy(
    { id: data.categoryId }
  );

  if (!category) throw new AppError('Category not found', 404);

  const address: Address = await addressRepo.save(data.address);

  const realEstate: RealEstate = await realEstateRepo.save({
    ...data,
    address,
    category: category,
  });

  return realEstate;
};

export const readAllRealEstatesService = async (): Promise<
  RealEstate[]
> => {
  return await realEstateRepo.find({
    relations: {
      address: true,
    },
  });
};
