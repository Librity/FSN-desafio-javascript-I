import 'reflect-metadata';
import 'express-async-errors';

import { createConnection, useContainer } from 'typeorm';
import { Container } from 'typedi';

import App from './app';

useContainer(Container);
createConnection()
  .then(async (connection) => {
    App.listen(3000);
    console.log('Server started on port 3000!');
  })
  .catch((error) => console.log(error));
