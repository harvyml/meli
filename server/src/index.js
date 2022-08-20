require('dotenv').config();
const path = require('path');

const express = require('express');
const app = express();

// serve react static assets
app.use(express.static(path.join(__dirname, '../../client/', 'build')));
app.use(express.static('public'));

// serve only from index.html
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.listen(process.env.PORT, () =>
  console.log(`listening on port ${process.env.PORT}`)
);
