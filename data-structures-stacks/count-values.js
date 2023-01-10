/* exported countValues */

function countValues(stack) {
  let i = 0;
  for (let x = 1; typeof stack.peek() === 'string' || stack.peek() || typeof stack.peek() === 'boolean' || typeof stack.peek() === 'number' || stack.peek() === null; x++) {
    stack.pop();
    i = x;
  }
  return i;
}
