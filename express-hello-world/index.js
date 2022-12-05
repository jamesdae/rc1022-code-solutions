const express = require('./node_modules/express');
const app = express();

app.use(function (req, res, next) {
  res.send('Hello World!!');
  next();
});

app.listen(3000);
