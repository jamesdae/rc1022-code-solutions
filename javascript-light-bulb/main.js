var timesClicked = 0;
var button = document.querySelector('.bulb');
var onOff = document.querySelector('.off');

button.addEventListener('click', function () {
  timesClicked += 1;
  if (timesClicked % 2 === 0) {
    onOff.className = 'container off';
  } else {
    onOff.className = 'container on';
  }
});
