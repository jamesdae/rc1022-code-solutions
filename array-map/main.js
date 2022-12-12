const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubled = numbers.map(eachNumber => eachNumber * 2);
console.log(doubled);

const prices = numbers.map(eachNumber => `$${eachNumber.toFixed(2)}`);
console.log(prices);

const upperCased = languages.map(eachLanguage => eachLanguage.toUpperCase());
console.log(upperCased);

const firstLetters = languages.map(eachLanguage => eachLanguage[0]);
console.log(firstLetters);
