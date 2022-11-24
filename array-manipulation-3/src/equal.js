/* exported equal */

// define function equal with two parameters
// first parameter is first array
// second parameter is second array
// loop through each array and compare each index

function equal(first, second) {
  if (first.join() !== second.join()) {
    return false;
  }
  for (var i = 0; i < second.length; i++) {
    for (var j = 0; j < first.length; j++) {
      if (first[j] !== second[i]) {
        return false;
      } else if (second[i] === first[j]) {
        return true;
      }
    }
  } return true;
}

// call the join method of the first array
// call the join method on the second array
// compare if the return value for both
// if they are not equal, return false
// run two for loops to iterate through both arrays
// return false if any of the first array's values aren't equal to each value of the second array
// return true if all of the first array's values are equal to all values of the second array

// alternative answer below
// function equal(first, second) {
//   for (var i = 0; i < first.length; i++) {
//     if (!second.includes(first[i])) {
//       return false;
//     }
//   }
//   for (var j = 0; j < second.length; j++) {
//     if (!first.includes(second[j])) {
//       return false;
//     }
//   }
//   if (first.join() !== second.join()) {
//     return false;
//   }
//   return true;
// }
