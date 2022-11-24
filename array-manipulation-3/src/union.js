/* exported union */

// define function union with two parameters
// both parameters are given arrays
// define new variable newArray
// use a loop for each array

function union(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (!newArray.includes(first[i])) {
      newArray.push(first[i]);
    } else if (!second.includes(first[i])) {
      newArray.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (!first.includes(second[j])) {
      newArray.push(second[j]);
    }
  } return newArray;
}

// push unique values of first and second arrays to newArray
// push values from second array that are not included in the first array to newArray
// return newArray
