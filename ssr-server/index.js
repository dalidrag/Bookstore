/* eslint-disable no-unused-vars */
import '@babel/polyfill';

import express from 'express';
import React from 'react';
import compression from 'compression';
import renderer from './renderer';

const app = express();

function shouldCompress(req, res) {
  if (req.headers['x-no-compression']) return false;
  return compression.filter(req, res);
}

app.use(
  compression({
    level: 2, // set compression level from 1 to 9 (6 by default)
    filter: shouldCompress // set predicate to determine whether to compress
  })
);

const port = process.env.PORT || 4000;

// To be able to serve static files
app.use(express.static('public'));

app.get('*', (req, res) => {
  const params = req.params[0].split('/');
  const id = params[2];

  const context = {};
  const content = renderer(req, context);

  if (context.notFound) {
    res.status(404);
  }

  res.send(content);
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
