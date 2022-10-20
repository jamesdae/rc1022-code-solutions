/* exported filterOutStrings */
function filterOutStrings(values) {
  var x = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] === 'number') {
      x.push(values[i]);
    }
  } return x;
}
