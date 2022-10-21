/* exported reverseWord */

// define function reverseWord
// assign empty string to new variable
// add the value of the string at last index to new variable

function reverseWord(word) {
  var reverse = '';
  for (var i = word.length - 1; i >= 0; i--) {
    reverse += word[i];
  } return reverse;
}

// for loop to iterate through given string
// for loop begins at the last index of string and continues until index 0
// during each loop the value of string at index i is added to reverse string
