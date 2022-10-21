/* exported getValue */

// define function getValue
// return value of given object at the given key property
// check if property exists

function getValue(object, key) {
  if (key in object === true) {
    return object[key];
  } return undefined;
}

// checks if the given key is a property of given object
// if so, return the value of object at key property
// if not, return undefined

// Old solution below
//
// function getValue(object, key) {
//   var property = '';
//  if (typeof object[key] !== 'string') {
//    property = object[key];
//  } else {
//    property += object[key];
//  } return property;
// }
