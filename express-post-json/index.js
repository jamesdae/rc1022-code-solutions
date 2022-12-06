const express = require('./node_modules/express');
const app = express();

let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const newArray = [];
  for (const ids in grades) {
    newArray.push(grades[ids]);
  }
  res.status(200).json(newArray);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const newObj = {
    id: nextId,
    name: req.body.name,
    course: req.body.course,
    score: req.body.score
  };
  nextId++;
  grades[newObj.id] = newObj;
  res.status(201).json(newObj);
});

app.listen(3000);
