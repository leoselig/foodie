import createLogger from 'redux-logger';

import createProdMiddlewares from './prod';

export default function createDevMiddlewares(options) {
  return [
    ...createProdMiddlewares(options),
    createLogger()
  ];
}
