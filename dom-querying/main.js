console.log('hello, world');

var hObject = document.querySelector('h1');
console.log('heading', hObject);
console.dir(hObject);

var idObject = document.querySelector('#explanation');
console.log('#explanation', idObject);
console.dir(idObject);

var classObject = document.querySelector('.hint');
console.log('.classObject', classObject);
console.dir(classObject);

var pObject = document.querySelectorAll('p');
console.log('p elements', pObject);
console.dir(pObject);

var exampleLink = document.querySelectorAll('.example-link');
console.log('.example-link', exampleLink);
console.dir(exampleLink);
