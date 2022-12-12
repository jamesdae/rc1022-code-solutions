class ExampleClass {
}

const example = new ExampleClass();

console.log('typeof example:', typeof example);
console.log('value of example:', example);

console.log('typeof example.__proto__', typeof example.__proto__);
console.log('value of example.__proto__', example.__proto__);

console.log('typeof ExampleClass.prototype:', typeof ExampleClass.prototype);
console.log('value of ExampleClass.prototype:', ExampleClass.prototype);

console.log('example instanceof ExampleClass', example instanceof ExampleClass);
