import { graphql } from 'graphql';
import deepExtend from 'deep-extend';

import startDatabase from '../../src/data';
import createSchema from '../../src/schema';
import { database } from '../../src/config';

const loadingSequelize = startDatabase(database);

export default async function testQuery({
  prepareData,
  query
}) {
  const sequelize = await loadingSequelize;

  await clearData(sequelize);

  const entities = await setupData(sequelize, prepareData);

  const schema = createSchema(sequelize);

  const graphqlResponse = await graphql(schema, query(entities), {}, {});

  if (graphqlResponse.errors) {
    throw new Error(graphqlResponse.errors);
  }

  return graphqlResponse;
}

async function setupData(sequelize, prepareData) {
  let entities = {};

  for (const createData of prepareData) {
    entities = deepExtend(entities, await createData(sequelize, entities));
  }

  return entities;
}

function clearData(sequelize) {
  return sequelize.transaction(async (transaction) => {
    const options = {
      raw: true,
      transaction
    };

    await sequelize.query('SET FOREIGN_KEY_CHECKS=0;', options);

    await Promise.all(
      Object.keys(sequelize.models).map(async (modelName) => (
        sequelize.models[modelName].truncate({
          ...options,
          cascade: true
        })
    )));

    await sequelize.query('SET FOREIGN_KEY_CHECKS=1;', options);
  });
}
