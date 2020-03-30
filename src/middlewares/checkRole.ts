import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { User } from '../entity/User';

export const checkRole = (roles: Array<string>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const id = res.locals.jwtPayload.userId;

    const userRepository = getRepository(User);

    const user = await userRepository.findOne(id);

    if (!user) return res.status(401).send();

    if (roles.indexOf(user.role) > -1) return next();
    else return res.status(401).send();
  };
};
