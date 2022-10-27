
var $click = document.querySelector('.task-list');
$click.addEventListener('click', function (event) {
  console.log('event.target:', event.target, ' event.target.tagName:', event.target.tagName);
  if (event.target.matches('button')) {
    var close = event.target.closest('.task-list-item');
    console.log('closest .task-list-item', close);
    close.remove();
  }
});
