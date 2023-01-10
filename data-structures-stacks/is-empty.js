/* exported isEmpty */

function isEmpty(stack) {
  if (stack.peek() !== undefined) {
    return false;
  } else return true;
}
