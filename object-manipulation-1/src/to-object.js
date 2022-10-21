/* exported toObject */

// define function toObject
// keyValuePair is an array containing a string and any value
// take keyValuePair as parameter
// return new object with first string as property and value as value

function toObject(keyValuePair) {
  var myObject = {};
  myObject[keyValuePair[0]] = keyValuePair[1];
  return myObject;
}

// assign empty object to new variable myObject
// create a property named after the string (keyValuePair[0])
// assign the value in keyValuePair to new property
// return new object
