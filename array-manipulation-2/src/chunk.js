/* exported chunk */

function chunk(array, size) {
  var newArray = [];
  if (array.length > 0) {
    for (var i = 0; i < array.length; i += size) {
      newArray.push(array.slice(i, i + size));
    }
  } return newArray;
}
