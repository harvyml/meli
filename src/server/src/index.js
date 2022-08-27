require('dotenv').config();
// serve react static assets
import express from 'express';
import path from 'path';
import { homeTemplate } from './template';
import api from './api';
import { createStore } from 'redux';
import reducer from '../../client/src/reducers';

import productsRouter from './routes/product';

const app = express();

// Serving static files
app.use('/public', express.static(path.resolve('./build/client')));
app.use('/assets', express.static(path.resolve('src/client/src/assets')));
app.use('/server/assets', express.static(path.resolve('./build/server/')));
app.use('/items/assets', express.static(path.resolve('src/client/src/assets')));
app.use('/api', api);
// server rendered home page
app.get('/', (req, res) => {
  const initialState = { query: req.query };
  const store = createStore(reducer, initialState);
  console.log(initialState);
  const response = homeTemplate(store, initialState);
  res.setHeader('Cache-Control', 'assets, max-age=604800');
  res.send(response);
});

app.use('/items', productsRouter);

// start the server
app.listen(process.env.PORT || 3000, () =>
  console.log(`listening on port: ${process.env.PORT}`)
);
