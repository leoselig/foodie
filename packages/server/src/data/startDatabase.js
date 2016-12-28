// @flow

import Sequelize from 'sequelize';

import type { AppConfigDatabase } from '../config';

import defineModels from './models';

export default async function startDatabase({
  database,
  userName,
  password,
  ...sequelizeOptions
}: AppConfigDatabase): Promise<Sequelize> {
  const sequelize = new Sequelize(
    database,
    userName,
    password,
    sequelizeOptions
  );

  defineModels(sequelize);

  await sequelize.sync({ force: true });

  return sequelize;
}
