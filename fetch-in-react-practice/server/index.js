require('dotenv/config');
const path = require('path');
const pg = require('pg');
const express = require('express');

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const publicPath = path.join(__dirname, 'public');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(require('./dev-middleware')(publicPath));
}

const staticMiddleware = express.static(publicPath);

app.use(staticMiddleware);

const jsonMiddleware = express.json();

app.use(jsonMiddleware);

app.get('/api/todos', (req, res) => {
  const sql = `
    select *
      from "todos"
     order by "todoId"
  `;
  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'an unexpected error occurred'
      });
    });
});

app.post('/api/todos', (req, res) => {
  const { task, isCompleted = false } = req.body;
  if (!task || typeof isCompleted !== 'boolean') {
    res.status(400).json({
      error: 'task (string) and isCompleted (boolean) are required fields'
    });
    return;
  }
  const sql = `
    insert into "todos" ("task", "isCompleted")
    values ($1, $2)
    returning *
  `;
  const params = [task, isCompleted];
  db.query(sql, params)
    .then(result => {
      const [todo] = result.rows;
      res.status(201).json(todo);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'an unexpected error occurred'
      });
    });
});

app.patch('/api/todos/:todoId', (req, res) => {
  const todoId = Number(req.params.todoId);
  if (!Number.isInteger(todoId) || todoId < 1) {
    res.status(400).json({
      error: 'todoId must be a positive integer'
    });
    return;
  }
  const { isCompleted } = req.body;
  if (typeof isCompleted !== 'boolean') {
    res.status(400).json({
      error: 'isCompleted (boolean) is a required field'
    });
    return;
  }
  const sql = `
    update "todos"
       set "updatedAt"   = now(),
           "isCompleted" = $1
     where "todoId" = $2
     returning *
  `;
  const params = [isCompleted, todoId];
  db.query(sql, params)
    .then(result => {
      const [todo] = result.rows;
      if (!todo) {
        res.status(404).json({
          error: `cannot find todo with todoId ${todoId}`
        });
        return;
      }
      res.json(todo);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'an unexpected error occurred'
      });
    });
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
