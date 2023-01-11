require('dotenv/config');
const path = require('path');
const pg = require('pg');
const express = require('express');
const ClientError = require('./client-error');
const errorMiddleware = require('./error-middleware');
const uploadsMiddleware = require('./uploads-middleware');

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();
const publicPath = path.join(__dirname, 'public');

if (process.env.NODE_ENV === 'development') {
  app.use(require('./dev-middleware')(publicPath));
}

app.use(express.static(publicPath));
app.use(express.json());

app.post('/api/uploads', uploadsMiddleware, (req, res, next) => {
  const { caption } = req.body;
  if (!caption) {
    throw new ClientError(400, 'caption is a required field');
  }
  console.log('req', req.file.filename);
  /**
   * - create a url for the image by combining '/images' with req.file.filename
   * - insert the "caption" and "url" into the "images" table
   * - respond with the inserted row data
   * - catch any errors
   */
  const url = `/images/${req.file.filename}`;
  const sql = `
    insert into "images" ("url", "caption")
    values ($1, $2)
    returning *;
  `;
  const params = [url, caption];
  db.query(sql, params)
    .then(result => {
      if (!result.rows[0]) {
        throw new ClientError(404, '404 Error');
      }
      res.json(result.rows[0]);
    })
    .catch(err => next(err));
});

app.get('/api/images', (req, res, next) => {
  const sql = `
    select *
      from "images"
  `;
  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => next(err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
