/* exported intersection */

// define function intersection with two parameters
// each parameter is given Array
// define new variable newArray

function intersection(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      newArray.push(first[i]);
    }
  } return newArray;
}

// assign empty array to newArray
// loop through first array
// check if the second array includes any of the values of first array at index i
// push those values to newArray
// return newArray
