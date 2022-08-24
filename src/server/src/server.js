import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../../client/src/App';

export default function render(initialState) {
  let content = renderToString(<App />);
  return {
    content,
  };
}
