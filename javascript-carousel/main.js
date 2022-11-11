var $buttons = document.querySelectorAll('button');
var $center = document.querySelector('.center');
var $hiddenDiv = document.querySelector('.hidden');
var intId = 0;
var $images = document.querySelectorAll('img');
var $dots = document.querySelector('.dots');

var bulbasaur = document.querySelector('.hidden img[alt="bulbasaur"');
var charmander = document.querySelector('.hidden img[alt="charmander"');
var squirtle = document.querySelector('.hidden img[alt="squirtle"');
var pikachu = document.querySelector('.hidden img[alt="pikachu"');
var jigglypuff = document.querySelector('.hidden img[alt="jigglypuff"');

function changeDots() {
  for (var i = 0; i < $buttons.length; i++) {
    if ($buttons[i].getAttribute('id') === $center.firstElementChild.getAttribute('alt')) {
      $buttons[i].className = 'currentdot';
    } else {
      $buttons[i].removeAttribute('class');
    }
  }
}

changeDots();

window.addEventListener('DOMContentLoaded', startTimer);

function startTimer() {
  var interval = setInterval(switchImage, 3000);
  intId = interval;
}

function clearTimer() {
  clearInterval(intId);
}

function switchImage() {
  var mainImage = $center.firstElementChild;
  var firstHidden = $hiddenDiv.firstElementChild;
  var oldPic = $center.replaceChild(firstHidden, mainImage);
  $hiddenDiv.appendChild(oldPic);
  changeDots();
}

function reverseImage() {
  var mainImage = $center.firstElementChild;
  var lastHidden = $hiddenDiv.lastElementChild;
  var oldPic = $center.replaceChild(lastHidden, mainImage);
  $hiddenDiv.prepend(oldPic);
  changeDots();
}

var $right = document.querySelector('.fa-angle-right');
$right.addEventListener('click', function () {
  clearTimer();
  switchImage();
  startTimer();
});

var $left = document.querySelector('.fa-angle-left');
$left.addEventListener('click', function () {
  clearTimer();
  reverseImage();
  startTimer();
});

$dots.addEventListener('click', function (event) {
  for (var i = 0; i < $images.length; i++) {
    if (event.target.getAttribute('id') === $images[i].getAttribute('alt')) {
      var mainImage = $center.firstElementChild;
      var targetPokemon = $images[i];
      $center.replaceChild(targetPokemon, mainImage);
      if (targetPokemon.getAttribute('alt') === 'bulbasaur') {
        $hiddenDiv.replaceChildren(charmander, squirtle, pikachu, jigglypuff);
      }
      if (targetPokemon.getAttribute('alt') === 'charmander') {
        $hiddenDiv.replaceChildren(squirtle, pikachu, jigglypuff, bulbasaur);
      }
      if (targetPokemon.getAttribute('alt') === 'squirtle') {
        $hiddenDiv.replaceChildren(pikachu, jigglypuff, bulbasaur, charmander);
      }
      if (targetPokemon.getAttribute('alt') === 'pikachu') {
        $hiddenDiv.replaceChildren(jigglypuff, bulbasaur, charmander, squirtle);
      }
      if (targetPokemon.getAttribute('alt') === 'jigglypuff') {
        $hiddenDiv.replaceChildren(bulbasaur, charmander, squirtle, pikachu);
      }
      clearTimer();
      changeDots();
      startTimer();
    }
  }
});
