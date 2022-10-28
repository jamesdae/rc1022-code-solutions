/* exported defaults */

// define function defaults
// first parameter is a target object
// second is a source object
// compare keys of both
// add any key/value pair of source that aren't in target object

function defaults(target, source) {
  var sourceArray = Object.keys(source);
  var targetArray = Object.keys(target);
  for (var i = 0; i < sourceArray.length; i++) {
    if (!targetArray.includes(sourceArray[i])) {
      target[sourceArray[i]] = source[sourceArray[i]];
    }
  }
}

// assign array containing keys of source object to new sourceArray variable
// assign array containing keys of target object to new targetArray variable
// iterate through source array
// check if any of the keys in source are included in targetArray
// create new key for target
// find name of key to add from source object from sourceArray
// assign value of source object at key to new property in target
