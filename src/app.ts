import bodyParser from 'body-parser';
import helmet from 'helmet';
import express, { Express } from 'express';
import cors from 'cors';
import { errors } from 'celebrate';
import path from 'path';
import * as http from 'http';

import routes from './routes';

interface IApp {
  server: Express;
  listen(port: number): void;
}

class App implements IApp {
  public server: Express;

  constructor() {
    this.server = express() as Express;

    this.server.listen();

    this.config();
    this.middlewares();
    this.routes();
    // this.exceptionHandler();
  }

  public  listen(port: number): void {
     this.server.listen(port);
  }

  private config(): void {
    this.server.use(cors());
    this.server.use(helmet());

    this.server.use(bodyParser.json());
    this.server.use(express.json());

    this.server.use(express.static('public'));
    this.server.set('view engine', 'ejs');
    this.server.set('views', path.resolve(__dirname, '../views'));
  }

  private middlewares(): void {
    this.server.use(errors());
  }

  private routes(): void {
    this.server.use('/', routes);
  }

  // private exceptionHandler():void {}
}

export default new App();
