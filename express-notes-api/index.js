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
  const noneError = {
    error: `no note with id ${req.params.id}`
  };
  const intError = {
    error: 'id must be a positive integer'
  };
  if (!data.notes[req.params.id] && req.params.id > 0) {
    res.status(404).json(noneError);
  } else if (!data.notes[req.params.id]) {
    res.status(400).json(intError);
  } else {
    res.status(200).json(data.notes[req.params.id]);
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
    fs.writeFile('data.json', JSON.stringify(data), 'utf-8', err => {
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
  const error400 = {
    error: 'id must be a positive integer'
  };
  const error404 = {
    error: `cannot find note with id ${req.params.id}`
  };
  const error500 = {
    error: 'An unexpected error occured'
  };
  if (req.params.id > 0 && !data.notes[req.params.id]) {
    res.status(404).json(error404);
  } else if (!data.notes[req.params.id]) {
    res.status(400).json(error400);
  } else {
    delete data.notes[req.params.id];
    fs.writeFile('data.json', JSON.stringify(data), 'utf-8', err => {
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
  const error400 = {
    error: 'id must be a positive integer'
  };
  const error404 = {
    error: `cannot find note with id ${req.params.id}`
  };
  const error500 = {
    error: 'An unexpected error occured'
  };
  const contentError = {
    error: 'content is a required field'
  };
  if (!data.notes[req.params.id]) {
    if (req.params.id > 0) {
      res.status(404).json(error404);
    } else {
      res.status(400).json(error400);
    }
  } else if (req.body.content === undefined) {
    res.status(400).json(contentError);
  } else {
    data.notes[req.params.id] = req.body;
    data.notes[req.params.id].id = Number(req.params.id);
    fs.writeFile('data.json', JSON.stringify(data), 'utf-8', err => {
      if (err) {
        console.error(err);
        res.status(500).json(error500);
      } else {
        res.status(200).json(data.notes[req.params.id]);
      }
    });
  }
});

app.listen(3000);
