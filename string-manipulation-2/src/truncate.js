/* exported truncate */

// define function truncate
// first parameter is a specific length in number form
// second is any string
// return a string that includes the included string up to index of that given length

function truncate(length, string) {
  var newString = '';
  if (length > string.length) {
    newString += string;
  } else if (string.length > 0) {
    for (var i = 0; i < length; i++) {
      newString += string[i];
    }
  } newString += '...';
  return newString;
}

// create empty string and assign to variable newString
// check if length given is longer than given string's length
// if true then return the original string as is
// check if string is not an empty string
// if true then add each character of string to newString up to index of length
// if not do nothing and add ... to newString
// return newString
