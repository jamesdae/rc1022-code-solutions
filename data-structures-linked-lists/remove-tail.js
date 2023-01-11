/* exported removeTail */

function removeTail(list) {
  if (!list.next) return null;
  while (list.next.next) {
    list = list.next;
  } list.next = null;
  return list;
}
