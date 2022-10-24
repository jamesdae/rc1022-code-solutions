/* exported includes */

// define function includes
// one parameter is any array
// second is a value representing a potential value within index
// compare each value in array with potential value

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  } return false;
}

// for loop to iterate through array
// if value of array at index i is equal to given value, return true
// if not, return false
