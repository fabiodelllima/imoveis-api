import { NextFunction, Request, Response } from 'express';
import { ZodTypeAny } from 'zod';

export const validateBody =
  (schema: ZodTypeAny) =>
  (req: Request, res: Response, next: NextFunction): void => {
    req.body = schema.parse(req.body);


export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { authorization } = req.headers;

  if (!authorization)
    throw new AppError('Missing bearer token', 401);

  const token: string = authorization.split(' ')[1];
  const decoded = verify(token, process.env.SECRET_KEY!);
  res.locals = { ...res.locals, decoded };

  return next();
};

export const verifyAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { admin } = res.locals.decoded;

  if (!admin)
    throw new AppError('Insufficient permissions', 403);

  return next();
};

