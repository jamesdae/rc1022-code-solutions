var colors = ['red', 'white', 'blue'];
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);

console.log('America is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2]);

colors[2] = 'green';
console.log('value of colors:', colors);

var students = ['LeBron', 'Carmelo', 'Dwyane', 'Kobe'];
var numberOfStudents = students.length;
console.log('There are ' + numberOfStudents + ' students in the class.');
var lastIndex = numberOfStudents - 1;
var lastStudent = students[lastIndex];
console.log('The last student in the array is ' + lastStudent + '.');
console.log('value of students:', students);
