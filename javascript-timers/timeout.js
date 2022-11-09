var $message = document.querySelector('.message');

function helloThere() {
  $message.innerText = 'Hello There';
}

setTimeout(helloThere, 2000);
