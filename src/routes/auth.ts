import { Router } from 'express';
import AuthController from '../app/controllers/AuthController';
import { checkJwt } from '../app/middlewares/checkJwt';

const router = Router();

router.post('/login', AuthController.login);

router.post('/change-password', [checkJwt], AuthController.changePassword);

export default router;
