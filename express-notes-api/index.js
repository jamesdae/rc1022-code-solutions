const express = require('./node_modules/express');
const data = require('./data.json');
const fs = require('fs');

const app = express();
app.use(express.json());

app.get('/api/notes', (req, res) => {
  const newArray = [];
  for (const ids in data.notes) {
    newArray.push(data.notes[ids]);
  }
  res.status(200).json(newArray);
});

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  const noneError = {
    error: `no note with id ${id}`
  };
  const intError = {
    error: 'id must be a positive integer'
  };
  if (!data.notes[id] && id > 0 && Number.isInteger(id)) {
    res.status(404).json(noneError);
  } else if (!data.notes[id]) {
    res.status(400).json(intError);
  } else {
    res.status(200).json(data.notes[id]);
  }
});

app.post('/api/notes', (req, res) => {
  const contentError = {
    error: 'content is a required field'
  };
  const unexpectedError = {
    error: 'An unexpected error occured.'
  };
  if (req.body.content === undefined) {
    res.status(400).json(contentError);
  } else {
    const newObj = req.body;
    newObj.id = data.nextId;
    data.notes[data.nextId] = newObj;
    data.nextId++;
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', jsonData, 'utf-8', err => {
      if (err) {
        console.error(err);
        res.status(500).json(unexpectedError);
      } else {
        res.status(201).json(newObj);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  const error400 = {
    error: 'id must be a positive integer'
  };
  const error404 = {
    error: `cannot find note with id ${id}`
  };
  const error500 = {
    error: 'An unexpected error occured'
  };
  if (id > 0 && !data.notes[id] && Number.isInteger(id)) {
    res.status(404).json(error404);
  } else if (!data.notes[id]) {
    res.status(400).json(error400);
  } else {
    delete data.notes[id];
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', jsonData, 'utf-8', err => {
      if (err) {
        console.error(err);
        res.status(500).json(error500);
      } else {
        res.sendStatus(204);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  const error400 = {
    error: 'id must be a positive integer'
  };
  const error404 = {
    error: `cannot find note with id ${id}`
  };
  const error500 = {
    error: 'An unexpected error occured'
  };
  const contentError = {
    error: 'content is a required field'
  };
  if (!data.notes[id]) {
    if (id > 0) {
      res.status(404).json(error404);
    } else {
      res.status(400).json(error400);
    }
  } else if (req.body.content === undefined) {
    res.status(400).json(contentError);
  } else {
    data.notes[id] = req.body;
    data.notes[id].id = id;
    fs.writeFile('data.json', JSON.stringify(data), 'utf-8', err => {
      if (err) {
        console.error(err);
        res.status(500).json(error500);
      } else {
        res.status(200).json(data.notes[id]);
      }
    });
  }
});

app.listen(3000);
