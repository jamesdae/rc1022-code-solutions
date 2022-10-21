/* exported getWords */

// define function getWords
// single parameter of string
// return a new array with given string's words as individual indexes

function getWords(string) {
  if (string === '') {
    var myArray = [];
  } else {
    myArray = string.split(' ');
  } return myArray;
}

// check if string provided is an empty string
// if true, assign empty array to new variable myArray
// else, call split method of string object and split each string when there is a space.
// return new myArray
