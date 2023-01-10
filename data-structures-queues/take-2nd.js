/* exported take2nd */

function take2nd(queue) {
  if (queue.peek() !== undefined) {
    const post = queue.dequeue();
    queue.enqueue(post);
    return queue.dequeue();
  }
}
