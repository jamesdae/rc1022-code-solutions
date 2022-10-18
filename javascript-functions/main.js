function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var secondsFromMinutes = convertMinutesToSeconds(5);
console.log('secondsFromMinutes:', secondsFromMinutes);

function greet(name) {
  var greeting = '"Hey, ' + name + '"';
  return greeting;
}

var fullGreeting = greet('James');
console.log('value of fullGreeting:', fullGreeting);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var calculatedArea = getArea(17, 42);
console.log('value of calculatedArea:', calculatedArea);

function getFirstName(person) {
  return person.firstName;
}

var fn = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('First name:', fn);

function getLastElement(array) {
  return array[array.length - 1];
}

var lastElement = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('Value of lastElement:', lastElement);
