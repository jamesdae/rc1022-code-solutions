/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  let top;
  if (queue.peek() === undefined) {
    return;
  }
  for (let i = 0; i < index; i++) {
    top = queue.dequeue();
    queue.enqueue(top);
  } return queue.dequeue();
}
