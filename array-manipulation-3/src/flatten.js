/* exported flatten */

function flatten(array) {
  var newArray = [];
  for (var index in array) {
    if (!Array.isArray(array[index])) {
      newArray.push(array[index]);
    } else if (Array.isArray(array[index])) {
      for (var i = 0; i < array[index].length; i++) {
        newArray.push(array[index][i]);
      }
    }
  } return newArray;
}
