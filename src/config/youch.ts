import { Request, Response, NextFunction } from 'express';
import Youch from 'youch';

export default async (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (process.env.NODE_ENV === 'development') {
    const errorsJson = await new Youch(error, req).toJSON();

    return res.status(500).json(errorsJson);
  }

  return res.status(500).json({ error: 'Internal server error.' });
};
