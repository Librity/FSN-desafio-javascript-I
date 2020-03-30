import { createConnection, useContainer, Connection } from 'typeorm';
import { Container } from 'typedi';

import express, { Express, Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import bodyParser from 'body-parser';

import { errors } from 'celebrate';
import path from 'path';
import Youch from 'youch';

import routes from './routes';

class App {
  public server: Express;

  constructor() {
    this.server = express() as Express;

    this.connectToDatabase().catch((error) => console.log(error));

    this.config();
    this.viewsConfig();

    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  public listen(port: number): void {
    this.server.listen(port);
    console.log(`Server listening on port ${port}...`);
  }

  private async connectToDatabase(): Promise<Connection> {
    useContainer(Container);

    return await createConnection();
  }

  private config(): void {
    this.server.use(cors());
    this.server.use(helmet());

    this.server.use(bodyParser.json());
    this.server.use(express.json());
  }

  private viewsConfig(): void {
    this.server.use(express.static('public'));

    this.server.set('view engine', 'ejs');
    this.server.set('views', path.resolve(__dirname, '..', 'views'));
  }

  private middlewares(): void {
    this.server.use(errors());
  }

  private routes(): void {
    this.server.use(routes);
  }

  private exceptionHandler(): void {
    this.server.use(
      async (error: Error, req: Request, res: Response, next: NextFunction) => {
        if (process.env.NODE_ENV === 'development') {
          const errorsJson = await new Youch(error, req).toJSON();

          return res.status(500).json(errorsJson);
        }

        return res.status(500).json({ error: 'Internal server error.' });
      }
    );
  }
}

export default new App();
