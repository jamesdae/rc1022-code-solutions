require('dotenv/config');
const express = require('express');
const db = require('./db');
const ClientError = require('./client-error');
const errorMiddleware = require('./error-middleware');
const staticMiddleware = require('./static-middleware');

const app = express();

if (process.env.NODE_ENV === 'development') {
  const path = require('path');
  const publicPath = path.join(__dirname, 'public');
  app.use(require('./dev-middleware')(publicPath));
}

app.use(staticMiddleware);

app.get('/api/products', (req, res, next) => {
  const sql = `
    select "productId",
           "name",
           "price",
           "imageUrl",
           "shortDescription"
      from "products"
  `;
  db.query(sql)
    .then(result => res.json(result.rows))
    .catch(err => next(err));
});

app.get('/api/products/:productId', (req, res, next) => {
  const productId = Number(req.params.productId);
  if (!productId) {
    throw new ClientError(400, 'productId must be a positive integer');
  }
  const sql = `
    select "productId",
           "name",
           "price",
           "imageUrl",
           "shortDescription",
           "longDescription"
      from "products"
     where "productId" = $1
  `;
  const params = [productId];
  db.query(sql, params)
    .then(result => {
      if (!result.rows[0]) {
        throw new ClientError(404, `cannot find product with productId ${productId}`);
      }
      res.json(result.rows[0]);
    })
    .catch(err => next(err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
