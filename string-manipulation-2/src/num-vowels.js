/* exported numVowels */

// define function numVowels
// one parameter a given string
// count how many vowels are in given string

function numVowels(string) {
  var vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      count++;
    }
  } return count;
}

// create array of known vowels in upper and lower case
// create new variable count assign value of 0
// loop through each character of string
// check if any character is included in array of vowels
// increment count by one every time condition is true
// return count
