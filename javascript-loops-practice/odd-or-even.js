/* exported oddOrEven */
function oddOrEven(numbers) {
  var x = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      x.push('even');
    } else {
      x.push('odd');
    }
  } return x;
}
