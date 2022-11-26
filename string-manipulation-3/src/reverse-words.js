/* exported reverseWords */

function reverseWords(string) {
  var newArray = string.split(' ');
  for (var i = 0; i < newArray.length; i++) {
    newArray[i] = newArray[i].split('');
    newArray[i].reverse();
    newArray[i] = newArray[i].join('');
  } return newArray.join(' ');
}
