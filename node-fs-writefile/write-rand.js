const fs = require('fs');
const randomnumber = Math.random().toString() + '\n';
fs.writeFile('random.txt', randomnumber, 'utf8', err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
