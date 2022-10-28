/* exported omit */

function omit(source, keys) {
  var object = Object.assign({}, source);
  for (var i = 0; i < keys.length; i++) {
    var x = keys[i];
    for (var key in source) {
      if (key === x) {
        delete object[key];
      }
    }
  } return object;
}
