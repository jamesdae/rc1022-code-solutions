/* exported drop */

// define function drop
// one parameter is any array
// second is the number of elements to remove from array from the front

function drop(array, count) {
  var newArray = [];
  if (array.length > 0) {
    for (var i = count; i < array.length; i++) {
      newArray.push(array[i]);
    }
  } return newArray;
}

// assign empty array to newArray
// check if array is an empty array
// if false, return newArray empty as is
// if true, run for loop
// for loop iterates through array initialized at provided count
// push values of array after index at count
