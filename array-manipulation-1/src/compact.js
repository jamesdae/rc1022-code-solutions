/* exported compact */

function compact(array) {
  var foo = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      foo.push(array[i]);
    }
  } return foo;
}
