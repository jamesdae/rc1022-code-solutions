/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const newNode = new LinkedList(value);
  newNode.next = list.next;
  list.next = newNode;
  return list;
}
