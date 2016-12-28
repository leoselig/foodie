import express from 'express';
import graphqlHTTP from 'express-graphql';

import schema from './schema';

const GRAPHQL_PORT = 4000;

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
  context: {}
}));

app.listen(GRAPHQL_PORT, () => {
  console.log(`Listening on http://localhost:${GRAPHQL_PORT}`);
});
