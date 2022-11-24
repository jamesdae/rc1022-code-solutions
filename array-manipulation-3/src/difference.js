/* exported difference */

// define function differences with two parameters
// both parameters are given arrays
// define new variable newArray
// loop through each array within function

function difference(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      newArray.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (!first.includes(second[j])) {
      newArray.push(second[j]);
    }
  } return newArray;
}

// check if the second array includes any value from the first array
// check if the first array includes any values from the second array
// only push values that are not included in both arrays to newArray
// return newArray
