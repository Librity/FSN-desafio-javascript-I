import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import { errors } from 'celebrate';

import routes from './routes';

class App {
  constructor() {
    this.server = express();

    this.config();
    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  config() {
    this.server.use(express.json());
    this.server.use(cors());

    this.server.use(express.static('public'));

    this.server.set('view engine', 'ejs');
    this.server.set('views', __dirname + '/app/views');
  }

  middlewares() {
    this.server.use(errors());
  }

  routes() {
    this.server.use(routes);
  }

  exceptionHandler() {}
}

export default new App();
