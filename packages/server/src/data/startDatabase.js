// @flow

import Sequelize from 'sequelize';

import type { AppConfigDatabase } from '../config';

import defineModels from './models';
import seed from './seeds';

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
  await seed(sequelize);

  return sequelize;
}
