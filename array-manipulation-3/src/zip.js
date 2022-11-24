/* exported zip */
function zip(first, second) {
  var chunkArray = [];
  if (second.length > first.length) {
    for (var i = 0; i < first.length; i++) {
      var chunk = [first[i], second[i]];
      chunkArray.push(chunk);
    }
  } else {
    for (var j = 0; j < second.length; j++) {
      chunk = [first[j], second[j]];
      chunkArray.push(chunk);
    }
  } return chunkArray;
}
