/* exported unique */

// define function unique with one parameter array
// return an array with all values only represented once
// define new variable newArray

function unique(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (!newArray.includes(array[i])) {
      newArray.push(array[i]);
    }
  } return newArray;
}

// assign empty array to newArray
// use for loop to iterate through given array
// check if newArray includes given array at all indexes
// if newArray does not have that value, push to newArray
// if newArray does have that value, do nothing
// return newly made array
