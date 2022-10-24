/* exported take */

// define function take
// one parameter is any array
// second parameter is number of elements to include from beginning of array
// return new array containing specified number of elements in order

function take(array, count) {
  var newArray = [];
  if (array.length > 0) {
    for (var i = 0; i < count; i++) {
      newArray.push(array[i]);
    }
  } return newArray;
}

// asssign an empty array to newArray
// check if array has any indexes
// if false, newArray is returned empty as is
// if true, for loop is run
// for loop iterates through given array up until index reaches the same value as count
// each loop the value of array at index i is pushed to newArray
