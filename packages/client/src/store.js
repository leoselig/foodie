import { createStore, applyMiddleware } from 'redux';

import createRootReducer from './reducers';
import createMiddlewares from './middlewares';

export default function createAppStore({ apolloClient }) {
  return createStore(
    createRootReducer({ apolloClient }),
    {},
    applyMiddleware(...createMiddlewares({ apolloClient }))
  );
}
