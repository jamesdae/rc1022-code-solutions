/* exported maxValue */

function maxValue(stack) {

  if (stack.peek() === undefined) {
    return -Infinity;
  }

  let i = stack.pop();

  while (typeof stack.peek() === 'number') {
    const sp = stack.pop();
    if (sp > i) {
      i = sp;
    }
  }
  return i;
}
