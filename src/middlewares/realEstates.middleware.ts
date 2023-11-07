import { NextFunction, Request, Response } from 'express';
import { Address, RealEstate } from '../entities';
import { addressRepo, realEstateRepo } from '../repositories';
import AppError from '../errors/AppError.error';

export const verifyRealEstateExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { realEstateId } = req.body;

  const realEstate: RealEstate | null =
    await realEstateRepo.findOne({
      where: {
        id: Number(realEstateId),
      },
    });

  if (!realEstate)
    throw new AppError('RealEstate not found', 404);

  return next();
};

export const verifyRealEstateAddressExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { address } = req.body;

  const realEstateAddressExists: Address | null =
    await addressRepo.findOne({
      where: {
        street: address.street,
        city: address.city,
        state: address.state,
        zipCode: address.zipCode,
      },
    });

  if (realEstateAddressExists)
    throw new AppError('Address already exists', 409);

  return next();
};
