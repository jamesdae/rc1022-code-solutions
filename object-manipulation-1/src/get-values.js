/* exported getValues */

// define function getValues
// take provided object as parameter
// return array of object properties' values

function getValues(object) {
  var vArray = [];
  for (var keys in object) {
    vArray.push(object[keys]);
  } return vArray;
}

// assign empty array to new variable vArray
// for..in loop to iterate through all object properties
// each loop pushes property values into vArray
// return array of property values
