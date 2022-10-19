var ab = 8;
var bc = 12;
var cd = 30;
var maximumValue = Math.max(ab, bc, cd);
console.log('value of maximumValue:', maximumValue);

var heroes = ['Wolverine', 'X-23', 'Gambit', 'Deadpool'];
var randomNumber = Math.random(heroes);
randomNumber *= heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('value of randomHero:', randomHero);

// Array Methods below

var library = [
  {
    title: 'Garfield',
    author: 'Jim Davis'
  },
  {
    title: 'Calvin and Hobbes',
    author: 'Bill Watterson'
  },
  {
    title: 'A Song of Ice and Fire',
    author: 'George RR Martin'
  }
];
var lastBook = library.pop();
console.log('value of lastBook:', lastBook);
var firstBook = library.shift();
console.log('value of firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('value of library:', library);

// String Methods below

var fullName = 'James ' + 'Yang';
var firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('value of sayMyName:', sayMyName);
