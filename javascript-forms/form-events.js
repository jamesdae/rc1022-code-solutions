
function handleFocus(event) {
  console.log('The focus event was fired');
  console.log('event.target.name:', event.target.name);

}

function handleBlur(event) {
  console.log('The blur event was fired');
  console.log('event.target.name:', event.target.name);
}

function handleInput(event) {
  console.log('value of', event.target.name, event.target.value);
}

var nam = document.forms[0].elements.name;
var emai = document.forms[0].elements.email;
var mes = document.forms[0].elements.message;

nam.addEventListener('focus', handleFocus);
nam.addEventListener('blur', handleBlur);
nam.addEventListener('input', handleInput);

emai.addEventListener('focus', handleFocus);
emai.addEventListener('blur', handleBlur);
emai.addEventListener('input', handleInput);

mes.addEventListener('focus', handleFocus);
mes.addEventListener('blur', handleBlur);
mes.addEventListener('input', handleInput);
