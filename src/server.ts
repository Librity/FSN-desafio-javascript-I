import 'reflect-metadata';
import 'express-async-errors';

import { createConnection, useContainer } from 'typeorm';
import { Container } from 'typedi';

import App from './App';

useContainer(Container);
createConnection()
  .then(async (connection) => {
    App.listen(3000);
  })
  .catch((error) => console.log(error));
