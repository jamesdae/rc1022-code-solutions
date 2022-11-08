
function ExampleConstructor() {}

console.log(ExampleConstructor.prototype);
console.log(typeof ExampleConstructor.prototype);

var newConstruct = new ExampleConstructor();
console.log('value of newConstruct', newConstruct);

var isInstance = newConstruct instanceof ExampleConstructor;
console.log('value of isInstance', isInstance);
