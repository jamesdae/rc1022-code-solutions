/* exported getKeys */

// define function getKeys
// accept an object as parameter
// return new array containing given object's property keys

function getKeys(object) {
  var keyArray = [];
  for (var keys in object) {
    keyArray.push(keys);
  } return keyArray;
}

// assign empty array to new variable keyArray
// for..in loop to iterate through all object properties
// each loop pushes property key into keyArray
// return array of property keys
