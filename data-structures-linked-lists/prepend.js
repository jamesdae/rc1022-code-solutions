/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {
  const newNode = new LinkedList(value);
  newNode.next = list;
  return newNode;
}
