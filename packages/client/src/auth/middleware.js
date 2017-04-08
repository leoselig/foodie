// @flow

import type { ApolloClientRequest, ApolloClientConnect } from 'apollo-client';
import { getToken } from './token';

export default function applyMiddleware(
  req: ApolloClientRequest,
  next: ApolloClientConnect
): void {
  if (!req.options.headers) {
    req.options.headers = {};
  }

  const authToken = getToken();

  if (!authToken) {
    return next();
  }

  req.options.headers = {
    ...req.options.headers,
    authorization: `Bearer ${authToken}`
  };

  next();
}
