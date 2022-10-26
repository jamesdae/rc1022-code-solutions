
var contactForm = document.forms[0];

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var newObject = {};
  newObject.name = document.forms[0].elements.name.value;
  newObject.email = document.forms[0].elements.email.value;
  newObject.message = document.forms[0].elements.message.value;
  console.log('Value of form controls:', newObject);
  contactForm.reset();
});
