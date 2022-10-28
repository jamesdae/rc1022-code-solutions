/* exported pick */

function pick(source, keys) {
  var object = {};
  for (var i = 0; i < keys.length; i++) {
    var x = keys[i];
    var y = source[x];
    for (var key in source) {
      if (key === x) {
        object[x] = y;
      }
      if (object[key] === undefined) {
        delete object[key];
      }
    }
  } return object;
}
