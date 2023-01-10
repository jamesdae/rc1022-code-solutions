/* exported postpone */

function postpone(queue) {
  if (queue.peek() !== undefined) {
    const post = queue.dequeue();
    queue.enqueue(post);
  }
}
