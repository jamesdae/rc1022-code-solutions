var student = {
  firstName: 'James',
  lastName: 'Yang',
  age: 27
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName:', fullName);

student.livesInIrvine = false;
console.log('value of student.livesInIrvine:', student.livesInIrvine);
student.previousOccupation = 'Genius Bar';
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Toyota',
  model: 'RAV4',
  year: 2017
};

vehicle['color'] = 'white';
console.log('value of vehicle["color"]:', vehicle['color']);
vehicle['isConvertible'] = false;
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Kobe',
  type: 'Shiba Inu'
};
delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
