import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import { validate } from 'class-validator';

import { User } from '../entity/User';
import config from '../config/config';

class AuthController {
  static login = async (req: Request, res: Response) => {
    let { username, password } = req.body;

    if (!(username && password)) {
      res.status(400).send();
    }

    const userRepository = getRepository(User);

    const user: User = await userRepository.findOneOrFail({
      where: { username },
    });

    if (!user) return res.status(401).send();

    if (!user.checkIfUnencryptedPasswordIsValid(password)) {
      res.status(401).send();
      return;
    }

    const token = jwt.sign(
      { userId: user.id, username: user.username },
      config.jwtSecret,
      { expiresIn: '1h' },
    );

    return res.send(token);
  };

  static changePassword = async (req: Request, res: Response) => {
    const id = res.locals.jwtPayload.userId;

    const { oldPassword, newPassword } = req.body;

    if (!(oldPassword && newPassword)) {
      res.status(400).send();
    }

    const userRepository = getRepository(User);

    const user: User = await userRepository.findOneOrFail(id);

    if (!user) return res.status(401).send();

    if (!user.checkIfUnencryptedPasswordIsValid(oldPassword)) {
      res.status(401).send();
      return;
    }

    user.password = newPassword;

    const errors = await validate(user);
    if (errors.length > 0) return res.status(400).send(errors);

    user.hashPassword();
    userRepository.save(user);

    return res.status(204).send();
  };
}
export default AuthController;
