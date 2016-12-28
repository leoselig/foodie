import { readFileSync } from 'fs';

import { sync as globSync } from 'glob';
import { makeExecutableSchema } from 'graphql-tools';

import createResolvers from './resolvers';

const typeDefs = globSync(`${__dirname}/types/**/*.graphql`)
  .map((fileName) => readFileSync(fileName).toString());

export default function createSchema(sequelize) {
  return makeExecutableSchema({
    typeDefs,
    resolvers: createResolvers(sequelize)
  });
}
