require('dotenv').config();
// serve react static assets
import express from 'express';
import path from 'path';
import template from './template';
import ssr from './server';

const app = express();

// Serving static files
app.use('/public', express.static(path.resolve(__dirname, '../../../public')));
app.use(
  '/assets',
  express.static(path.resolve(__dirname, '../../../public/assets'))
);

let initialState = {
  isFetching: false,
};

// server rendered home page
app.get('/', (req, res) => {
  const { content } = ssr(initialState);
  const response = template('Something', content);
  res.setHeader('Cache-Control', 'assets, max-age=604800');
  res.send(response);
});

// start the server
app.listen(process.env.PORT || 3000, () =>
  console.log(`listening on port: ${process.env.PORT}`)
);
