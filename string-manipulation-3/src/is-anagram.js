/* exported isAnagram */

// define function isAnagram with two parameters
// remove any spaces to only compare characters
// convert given strings into arrays
// sort both arrays by alphabetical order
// check if length of characters without spaces are equal

function isAnagram(firstString, secondString) {
  var newArray = firstString.replaceAll(' ', '');
  newArray = newArray.split('');
  var secondArray = secondString.replaceAll(' ', '');
  secondArray = secondArray.split('');
  newArray.sort();
  secondArray.sort();
  if (newArray.length !== secondArray.length) {
    return false;
  }
  for (var i = 0; i < newArray.length; i++) {
    if (newArray[i] !== secondArray[i]) {
      return false;
    }
  } return true;
}

// if length of characters are not equal return false
// if they are equal, continue
// loop through both arrays of equal length
// return false if any of the indexes are not equal to eachother
// return true otherwise
