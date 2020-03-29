require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database:
    process.env.NODE_ENV === 'development'
      ? process.env.DB_NAME_DEV
      : process.env.DB_NAME_TEST,
  define: {
    timestamps: true,
    underscore: true,
    underscoreAll: true,
  },
};
