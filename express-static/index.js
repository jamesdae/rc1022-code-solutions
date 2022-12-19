const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('public'));

const joined = path.join('__dirname', 'public');
console.log(joined);

app.listen(3000);
