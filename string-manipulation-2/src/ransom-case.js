/* exported ransomCase */

// define function ransomCase
// one parameter a given string
// return a new string with first character lowercase
// make second character uppercase
// continue pattern

function ransomCase(string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      newString += string[i].toLowerCase();
    } else {
      newString += string[i].toUpperCase();
    }
  } return newString;
}

// assign empty string to newString variable
// loop through given string
// lowercase each character at even numbered indexes of string
// uppercase each character at odd numbered indexes of string
// add each character to newString in order
// return newString
