/* exported initial */

// return array containing all elements of a given array before the last index
// define new function with single parameter for array

function initial(array) {
  var foo = [];
  for (var i = 0; i < array.length - 1; i++) {
    foo.push(array[i]);
  } return foo;
}

// assign empty array to var foo
// for loop to iterate through array
// push value of array at index i to new array
// loop continues until the second to last index in given array
