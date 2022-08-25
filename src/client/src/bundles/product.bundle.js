import React from 'react';
import { hydrate } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers';

// Create Redux store with state injected by the server
const store = createStore(reducer, { ...window.APP_STATE });

import Product from '../pages/MainProduct';

hydrate(
  <Provider store={store}>
    <Product />
  </Provider>,
  document.querySelector('#app')
);
