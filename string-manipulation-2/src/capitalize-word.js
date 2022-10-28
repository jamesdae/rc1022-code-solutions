/* exported capitalizeWord */
function capitalizeWord(word) {
  var newWord = '';
  newWord += word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    var secondHalf = word[i].toLowerCase();
    newWord += secondHalf;
  }
  if (word.toLowerCase() === 'javascript') {
    newWord = 'JavaScript';
  } return newWord;
}
