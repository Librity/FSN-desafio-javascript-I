import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import config from '../../config/config';

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  const key = 'auth';

  const token = req.headers[key] as string;

  let jwtPayload;

  try {
    jwtPayload = jwt.verify(token, config.jwtSecret) as any;

    res.locals.jwtPayload = jwtPayload;
  } catch (error) {
    return res.status(401).send();
  }

  const { userId, username } = jwtPayload;

  const newToken = jwt.sign({ userId, username }, config.jwtSecret, {
    expiresIn: '1h',
  });

  res.setHeader('token', newToken);

  return next();
};
