import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../../client/src/App';

module.exports = function render(initialState) {
  let content = renderToString(<App />);
  return {
    content,
  };
};
