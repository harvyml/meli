import React from 'react';
import { hydrate } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers';

// Create Redux store with state injected by the server
const store = createStore(reducer, { ...window.APP_STATE });

import App from '../pages/App';

hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
);
