import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  res.render('main')
})


export default routes;