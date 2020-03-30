import 'reflect-metadata';
import { createConnection, useContainer } from 'typeorm';
import { Container } from 'typedi';
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import routes from './routes';

useContainer(Container);
createConnection()
  .then(async (connection) => {
    const app = express();

    app.use(cors());
    app.use(helmet());
    app.use(bodyParser.json());

    app.use('/', routes);

    app.listen(3000, () => {
      console.log('Server started on port 3000!');
    });
  })
  .catch((error) => console.log(error));
