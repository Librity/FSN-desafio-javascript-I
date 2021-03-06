export default {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database:
    process.env.NODE_ENV === 'development'
      ? process.env.DB_NAME_DEV
      : process.env.DB_NAME_TEST,
  synchronize:
    process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'
      ? true
      : false,
  logging:
    process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'
      ? false
      : true,
  entities: ['src/app/entities/**/*.ts'],
  subscribers: ['src/app/subscribers/**/*.ts'],
  migrations: ['src/database/migrations/**/*.ts'],
  seeds: ['src/database/seeds/**/*.seed.ts'],
  factories: ['src/database/factories/**/*.factory.ts'],
  cli: {
    entitiesDir: 'src/app/entities',
    subscribersDir: 'src/app/subscribers',
    migrationsDir: 'src/database/migrations',
  },
};
