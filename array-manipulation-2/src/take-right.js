/* exported takeRight */

// define function takeRight
// one parameter is any array
// second is the number of elements to be taken from end of array

function takeRight(array, count) {
  var newArray = [];
  if (count > array.length) {
    return array;
  }
  if (array.length > 0) {
    for (var i = array.length - 1; i >= array.length - count; i--) {
      newArray.unshift(array[i]);
    }
  } return newArray;
}

// iterate through array starting at the end, and go down only as many times as count
// loop ends when i is approaching
