
var bigArray = [
  {
    isbn: '978-3-16-148410-0',
    title: 'Book One',
    author: 'James Yang'
  },
  {
    isbn: '978-3-16-148410-1',
    title: 'Book Two',
    author: 'Yames Jang'
  },
  {
    isbn: '978-3-16-148410-2',
    title: 'Book Three',
    author: 'Ames Ang'
  }
];

console.log('bigArray:', bigArray, 'type of bigArray:', typeof bigArray);

for (var i = 0; i < bigArray.length; i++) {
  console.log('JSON String of Each Object:', JSON.stringify(bigArray[i]));
  console.log('type of bigArray[i] after stringify:', typeof JSON.stringify(bigArray[i]));
}

var newString = '{"id":7,"Name":"Bond"}';
console.log('newString:', newString);
console.log('type of newString:', typeof newString);

var parsed = JSON.parse(newString);
console.log('newString parsed:', parsed);
console.log('type of parsed:', typeof parsed);
