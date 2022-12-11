const express = require('./node_modules/express');
const pg = require('pg');
const app = express();

app.use(express.json());

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const scoreError = {
  error: 'score must be a positive integer from 0-100'
};

const error500 = {
  error: 'An unexpected error occurred.'
};

const missingCourse = {
  error: 'Missing course field'
};

const missingName = {
  error: 'Missing name field'
};

const missingScore = {
  error: 'Missing score field'
};

app.get('/api/grades', (req, res, next) => {
  const sql = `
    select *
      from "grades";
  `;
  db.query(sql)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json(error500);
    });
});

app.get('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
     where "gradeId" = $1
  `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades', (req, res, next) => {
  if (req.body.course === undefined) {
    res.status(400).json(missingCourse);
    return;
  } else if (req.body.name === undefined) {
    res.status(400).json(missingName);
    return;
  } else if (req.body.score === undefined) {
    res.status(400).json(missingScore);
    return;
  } else if (!Number.isInteger(Number(req.body.score)) || Number(req.body.score) > 100 || Number(req.body.score) < 0) {
    res.status(400).json(scoreError);
    return;
  }
  const sql = `
    insert into "grades" ("name", "course", "score")
         values ($1, $2, $3)
         returning *;
  `;
  const values = [req.body.name, req.body.course, req.body.score];
  db.query(sql, values)
    .then(result => {
      res.status(201).json(result.rows[0]);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json(error500);
    });
});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: `input (${req.params.gradeId}) must be a positive integer`
    });
    return;
  } else if (req.body.course === undefined) {
    res.status(400).json(missingCourse);
    return;
  } else if (req.body.name === undefined) {
    res.status(400).json(missingName);
    return;
  } else if (req.body.score === undefined) {
    res.status(400).json(missingScore);
    return;
  } else if (!Number.isInteger(Number(req.body.score)) || Number(req.body.score) > 100 || Number(req.body.score) < 0) {
    res.status(400).json(scoreError);
    return;
  }
  const sql = `
    update "grades"
       set "course" = $1,
           "score" = $2,
           "name" = $3
     where "gradeId" = $4
     returning *;
  `;
  const params = [req.body.course, req.body.score, req.body.name, gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with gradeId: ${gradeId}`
        });
      } else {
        res.status(200).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json(error500);
    });
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: `input (${req.params.gradeId}) must be a positive integer`
    });
    return;
  }
  const sql = `
    delete
      from "grades"
     where "gradeId" = $1
     returning *;
  `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with gradeId: ${gradeId}`
        });
      } else {
        res.sendStatus(204);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json(error500);
    });
});

app.listen(3000);
