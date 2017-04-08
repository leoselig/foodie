// @flow

import React from 'react';
import { ApolloProvider } from 'react-apollo';

import App from './App';

type PropsType = {
  store: Store,
  apolloClient: Object
};

export default function Root({
  apolloClient,
  store
}: PropsType): React$Element<*> {
  return (
    <ApolloProvider
      client={apolloClient}
      store={store}
    >
      <App />
    </ApolloProvider>
  );
}
