const fsmodule = require('fs');
fsmodule.readFile('dijkstra.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
