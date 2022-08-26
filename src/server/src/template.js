import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Provider } from 'react-redux';
import App from '../../client/src/Pages/App';
import MainProduct from '../../client/src/pages/MainProduct';
import Html from './Html';

function homeTemplate(store, initialState, fetchedData) {
  const appMarkup = ReactDOMServer.renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const html = ReactDOMServer.renderToString(
    <Html
      styles={['/server/assets/app.css']}
      children={appMarkup}
      scripts={['public/app.js']}
      initialState={initialState}
    />
  );

  return html;
}

function productTemplate(store, initialState) {
  const productMarkup = ReactDOMServer.renderToString(
    <Provider store={store}>
      <MainProduct />
    </Provider>
  );

  const html = ReactDOMServer.renderToString(
    //using ../public/product.js because this route is one level deeper
    <Html
      children={productMarkup}
      scripts={['../public/product.js']}
      styles={['/server/assets/app.css']}
      initialState={initialState}
    />
  );

  return html;
}

export { homeTemplate, productTemplate };
