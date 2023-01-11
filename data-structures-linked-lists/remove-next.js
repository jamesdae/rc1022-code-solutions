/* exported removeNext */

function removeNext(list) {
  if (list.next) {
    list.next = list.next.next;
  }
  return list;
}
