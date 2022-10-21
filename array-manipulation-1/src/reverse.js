/* exported reverse */

// return array containing the elements of a given array in reverse order
// define function reverse that takes an array as a single parameter

function reverse(array) {
  var oof = [];
  for (var i = 0; i < array.length; i++) {
    oof.unshift(array[i]);
  } return oof;
}

// empty array is assigned to new variable oof
// unshift method to append each value of given array at index i to new array
// each value appends to the front of new array
// last index of original array becomes the first of the new array
