const express = require('./node_modules/express');
const app = express();

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

app.use('/api/grades', function (req, res, next) {
  const newArray = [];
  for (const ids in grades) {
    newArray.push(grades[ids]);
  }
  res.send(res.json(newArray));
  next();
});

app.listen(3000);
