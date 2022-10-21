/* exported tail */

// returns an array containing all items of a given array after the first (0) index.
// assign an empty array to var x before for loop

function tail(array) {
  var x = [];
  for (var i = 1; i < array.length; i++) {
    x.push(array[i]);
  } return x;
}

// for loop iterates beginning at index 1 up until the last index of array
// pushes value of every index after first into empty array x
