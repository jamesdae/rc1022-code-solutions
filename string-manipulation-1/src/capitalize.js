/* exported capitalize */

// define function capitalize
// returns the input string back with first character capitalized and others lowercase

function capitalize(word) {
  var newWord = '';
  newWord += word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    var secondHalf = word[i].toLowerCase();
    newWord += secondHalf;
  } return newWord;
}
