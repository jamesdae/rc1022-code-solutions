/* exported isVowel */

// define function isVowel
// single parameter of a string character
// compare given character with array of vowels

function isVowel(char) {
  var vowels = ['A', 'E', 'I', 'O', 'U', 'Y', 'a', 'e', 'i', 'o', 'u', 'y'];
  for (var i = 0; i < vowels.length; i++) {
    if (char === vowels[i]) {
      return true;
    }
  } return false;
}

// define vowels array with all possible vowels
// for loop to iterate through vowel array
// check if given character is equal to any value in vowel array
// if condition is true, return true
// if loop finishes without condition, return false.
