import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { validate } from 'class-validator';

import { User } from '../entities/User';

class UserController {
  public static listAll = async (req: Request, res: Response) => {
    const userRepository = getRepository(User);

    const users = await userRepository.find({
      select: ['id', 'username', 'role'],
    });

    return res.send(users);
  };

  public static getOneById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const userRepository = getRepository(User);

    try {
      const user = await userRepository.findOneOrFail(id, {
        select: ['id', 'username', 'role'],
      });

      return res.send(user);
    } catch (error) {
      res.status(404).send('User not found');
    }
  };

  public static newUser = async (req: Request, res: Response) => {
    const { username, password, role } = req.body;

    const user = new User();

    user.username = username;
    user.password = password;
    user.role = role;

    const errors = await validate(user);

    if (errors.length > 0) return res.status(400).send(errors);

    user.hashPassword();

    const userRepository = getRepository(User);

    try {
      await userRepository.save(user);
    } catch (e) {
      return res.status(409).send('username already in use');
    }

    return res.status(201).send('User created');
  };

  public static editUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    const { username, role } = req.body;

    const userRepository = getRepository(User);

    const user = await userRepository.findOne(id);

    if (!user) return res.status(404).send('User not found');

    user.username = username;
    user.role = role;

    const errors = await validate(user);

    if (errors.length > 0) return res.status(400).send(errors);

    try {
      await userRepository.save(user);
    } catch (e) {
      return res.status(409).send('username already in use');
    }

    return res.status(204).send();
  };

  public static deleteUser = async (req: Request, res: Response) => {
    const id = req.params.id;

    const userRepository = getRepository(User);

    const user = await userRepository.findOne(id);

    if (!user) return res.status(404).send('User not found');

    userRepository.delete(id);

    return res.status(204).send();
  };
}

export default UserController;
