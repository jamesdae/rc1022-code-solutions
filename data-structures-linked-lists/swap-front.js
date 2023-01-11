/* exported swapFront */

function swapFront(list) {
  if (list.next) {
    const nextNode = list.next;
    list.next = nextNode.next;
    nextNode.next = list;
    return nextNode;
  } return list;
}
