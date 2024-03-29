import { Request, Response, NextFunction } from 'express';
import { APIError } from '../utils/api-helpers/apiError';


export const ErrorHandler = (err: APIError, req: Request, res: Response, next: NextFunction) => {
  return res.status(err.HttpStatusCode).json(err.JSON);
};