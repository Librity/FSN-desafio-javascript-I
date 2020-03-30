import { Router } from 'express';

const routes: Router = Router();

routes.get('/', (req, res) => {
  res.render('main');
});

export default routes;
