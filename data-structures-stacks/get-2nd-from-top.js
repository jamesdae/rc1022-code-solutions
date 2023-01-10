/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return undefined;
  } else {
    const poppedOff = stack.pop();
    const peek = stack.peek();
    stack.push(poppedOff);
    return peek;
  }
}
