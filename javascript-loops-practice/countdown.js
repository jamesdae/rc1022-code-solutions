/* exported countdown */
function countdown(number) {
  var numbers = [];
  var i = 0;
  while (i < number + 1) {
    numbers.push(number);
    number--;
  } return numbers;
}
