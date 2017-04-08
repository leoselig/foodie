import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import apolloClient from './apolloClient';
import createAppStore from './store';
import Root from './Root';

const appMountElement = document.createElement('div');

document.body.appendChild(appMountElement);
render((
  <Root
    apolloClient={apolloClient}
    store={createAppStore({ apolloClient })}
  />
), appMountElement);
