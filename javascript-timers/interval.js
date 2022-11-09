var $countdown = document.querySelector('.countdown-display');

function countDown() {
  $countdown.innerText--;
  if ($countdown.innerText === '0') {
    $countdown.innerText = '~Earth Beeeelooowww Us~';
    clearInterval(intid);
  }
}

var intid = setInterval(countDown, 1000);
