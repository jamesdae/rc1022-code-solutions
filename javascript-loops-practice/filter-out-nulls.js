/* exported filterOutNulls */
function filterOutNulls(values) {
  var x = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] != null) {
      x.push(values[i]);
    }
  } return x;
}
