import React from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import App from '../../client/src/pages/App';

export function index(store, initialState) {
  let content = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );
  return {
    content,
  };
}
