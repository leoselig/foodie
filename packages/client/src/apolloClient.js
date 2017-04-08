import { ApolloClient, createNetworkInterface } from 'apollo-client';

import { apolloMiddleware } from './auth';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:4000/graphql'
});

networkInterface.use([ {
  applyMiddleware: apolloMiddleware
} ]);

export default new ApolloClient({
  networkInterface
});
