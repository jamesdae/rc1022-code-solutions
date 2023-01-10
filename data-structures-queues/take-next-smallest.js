/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  let i;
  while (queue.peek() || queue.peek() === 0) {
    const current = queue.dequeue();
    if (current <= queue.peek() || queue.peek() === undefined) {
      return current;
    }
    i = current;
    queue.enqueue(current);
  } return i;
}
