/* exported swapChars */

// define swapChars function
// one parameter is number to represent index of given string
// second is number to represent another index of given string
// third is given string
// return a new string with given string with characters at given indexes switched

function swapChars(firstIndex, secondIndex, string) {
  var newArray = Array.from(string);
  newArray[firstIndex] = string[secondIndex];
  newArray[secondIndex] = string[firstIndex];
  return newArray.join('');
}

// create new array from given string
// find the value of the given string at secondIndex
// assign that value to replace value at new array at firstIndex
// find value of string at firstIndex
// assign that value to replace value of new array at secondIndex
