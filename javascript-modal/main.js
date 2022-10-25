
var modal = document.querySelector('.modal');
var buttonOne = document.querySelector('.open');
var buttonTwo = document.querySelector('.no');
var timesClicked = 0;

buttonOne.addEventListener('click', function () {
  timesClicked += 1;
  if (timesClicked % 2 === 0) {
    modal.className = 'modal none';
  } else {
    modal.className = 'modal';
  }
});

buttonTwo.addEventListener('click', function () {
  var modalClicks = 0;
  modalClicks += 1;
  timesClicked -= 1;
  if (modalClicks % 2 === 0) {
    modal.className = 'modal';
  } else {
    modal.className = 'modal none';
  }
});
