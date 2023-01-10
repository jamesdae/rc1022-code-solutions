/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() !== undefined) {
    const poppedOff = stack.pop();
    stack.push(value);
    stack.push(poppedOff);
  }
}
