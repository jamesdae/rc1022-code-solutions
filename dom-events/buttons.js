// Click event

function handleClick(event) {
  console.log('button clicked', event);
  console.log('event.target', event.target);
}

var clickButton = document.querySelector('.click-button');

clickButton.addEventListener('click', handleClick);

// Mouseover

function handleMouseover(event) {
  console.log('button hovered', event);
  console.log('event.target', event.target);
}

var mouseOver = document.querySelector('.hover-button');

mouseOver.addEventListener('mouseover', handleMouseover);

// Double click

function handleDoubleClick(event) {
  console.log('button double-clicked', event);
  console.log('event.target', event.target);
}

var doubleClick = document.querySelector('.double-click-button');

doubleClick.addEventListener('dblclick', handleDoubleClick);
