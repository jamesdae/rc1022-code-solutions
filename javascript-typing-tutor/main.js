
var $pan = document.querySelectorAll('span');

document.addEventListener('keydown', function (event) {
  var $next = document.querySelector('.next');

  if ($next.classList.contains('space') && event.key === ' ') {
    $next.nextElementSibling.classList.add('next');
    $next.classList.replace('next', 'correct');
  }
  if ($next.innerText !== event.key) {
    $next.classList.add('wrong');
  } else if ($next.nextElementSibling.classList.contains('hidden') && $next.innerText === event.key) {
    $next.nextElementSibling.classList.replace('hidden', 'correct');
    for (var i = 0; i < $pan.length; i++) {
      $pan[i].setAttribute('class', 'hidden');
    }
  } else if ($next.classList.contains('wrong') && $next.innerText === event.key) {
    $next.classList.remove('wrong');
    $next.nextElementSibling.classList.add('next');
    $next.classList.replace('next', 'correct');
  } else {
    $next.nextElementSibling.classList.add('next');
    $next.classList.replace('next', 'correct');
  }
});
