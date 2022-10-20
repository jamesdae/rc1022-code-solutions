/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var suff = [];
  for (var i = 0; i < words.length; i++) {
    words[i] += suffix;
    suff.push(words[i]);
  } return suff;
}
