const fs = require('fs');
const input = process.argv[2] + '\n';
fs.writeFile('note.txt', input, 'utf-8', err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
