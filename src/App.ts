import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import { errors } from 'celebrate';
import path from 'path';

import routes from './routes';

interface App {
  server: any;
  listen: any;
}

class App {
  constructor() {
    this.server = express();

    this.config();
    this.middlewares();
    this.routes();
    // this.exceptionHandler();
  }

  config() {
    this.server.use(express.json());
    this.server.use(cors());

    this.server.use(express.static('public'));

    this.server.set('view engine', 'ejs');
    this.server.set('views', path.resolve(__dirname, '../views'));
  }

  middlewares() {
    this.server.use(errors());
  }

  routes() {
    this.server.use(routes);
  }

  // exceptionHandler() {}
}

export default new App();
