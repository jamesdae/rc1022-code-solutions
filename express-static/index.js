const express = require('express');
const path = require('path');
const app = express();

const joined = path.join(__dirname, 'public');

app.use(express.static(joined));

app.listen(3000);
