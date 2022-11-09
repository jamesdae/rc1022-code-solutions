
var $pan = document.querySelectorAll('span');
var $modal = document.querySelector('.modal');

document.addEventListener('keydown', function (event) {
  var $next = document.querySelector('.next');

  if ($next.classList.contains('space') && event.key === ' ') {
    $next.nextElementSibling.classList.add('next');
    $next.classList.replace('next', 'correct');
  } else if ($next.nextElementSibling.classList.contains('hidden') && $next.innerText === event.key) {
    $next.nextElementSibling.classList.remove('hidden');
    for (var i = 0; i < $pan.length; i++) {
      $pan[i].classList.add('hidden');
    }
  } else if ($next.classList.contains('wrong') && $next.innerText === event.key) {
    $next.classList.remove('wrong');
    $next.nextElementSibling.classList.add('next');
    $next.classList.replace('next', 'correct');
  } else if ($next.innerText !== event.key) {
    $next.classList.add('wrong');
  } else {
    $next.nextElementSibling.classList.add('next');
    $next.classList.replace('next', 'correct');
  }
});

var $cancelButton = document.querySelector('.cancel');
$cancelButton.addEventListener('click', function (event) {
  $modal.classList.add('hidden');
  $pan[$pan.length - 1].classList.remove('next', 'wrong');
  for (var i = 0; i < $pan.length; i++) {
    $pan[i].classList.replace('hidden', 'correct');
  }
});

var $confirmButton = document.querySelector('.confirm');
$confirmButton.addEventListener('click', function (event) {
  $modal.classList.add('hidden');
  for (var i = 0; i < $pan.length; i++) {
    $pan[i].classList.remove('hidden', 'correct', 'wrong', 'next');
  }
  $pan[0].className = 'next';
});
