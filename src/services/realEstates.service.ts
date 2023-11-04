import { realEstateRepo } from '../repositories';

export const readAllRealEstatesService = async (): Promise<
  RealEstate[]
> => {
  return await realEstateRepo.find({
    relations: {
      address: true,
    },
  });
};
