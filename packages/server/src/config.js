// @flow

const database = {
  database: 'foodie',
  userName: 'foodie',
  password: 'foodie',
  logging: false
};

const graphql = { port: 4000 };

const security = {
  SALT: 'Z9I3CALZ0HYc786YCuKM',
  TOKEN_LENGTH: 256
};

export { database, graphql, security };

export type AppConfigDatabase = {
  database: string,
  userName: string,
  password: string
};

export type AppConfig = {
  database: AppConfigDatabase
};
