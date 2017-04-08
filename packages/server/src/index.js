import express from 'express';
import graphqlHTTP from 'express-graphql';
import cors from 'cors';

import { database as databaseConfig } from './config';
import { startDatabase } from './data';
import createSchema from './schema';

startDatabase(databaseConfig).then((sequelize) => {
  const schema = createSchema(sequelize);

  const GRAPHQL_PORT = 4000;

  const app = express();

  app.use('/graphql', cors({
    origin: true,
    methods: [ 'POST' ]
  }), graphqlHTTP((request) => ({
    schema,
    graphiql: true,
    context: {
      authToken: console.log(request.headers) || request.headers.authorization
    },
    formatError: (error) => {
      console.error(error);

      return {
        message: error.message,
        locations: error.locations,
        stack: error.stack
      };
    }
  })));

  app.use((err, req, res, next) => {
    console.error(err.stack);

    next(err);
  });

  app.listen(GRAPHQL_PORT, () => {
    console.log(`Listening on http://localhost:${GRAPHQL_PORT}`);
  });
}).catch(console.error);
