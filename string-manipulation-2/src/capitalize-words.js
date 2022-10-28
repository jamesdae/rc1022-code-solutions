/* exported capitalizeWords */

function capitalizeWords(string) {
  var array = string.split(' ');
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i][0].toUpperCase() + array[i].substring(1, array[i].length).toLowerCase();
  } var newArray = array.join(' ');
  return newArray;
}
