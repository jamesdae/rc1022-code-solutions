/* exported invert */

// define function invert
// one parameter of source object
// return a new object with reversed key/value pairs from source

function invert(source) {
  var newObj = {};
  for (var key in source) {
    newObj[source[key]] = key;
  } return newObj;
}

// create new empty object
// loop through keys of source object
// create new key for newObj which = value of source at each key
// assign each of those keys the value of each source key name
