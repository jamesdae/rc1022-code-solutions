/* exported isPalindromic */

// define function isPalindromic with one parameter
// given string is parameter
// function has to avoid checking if spaces are present

function isPalindromic(string) {
  var newArray = string.split('');
  newArray = newArray.reverse();
  newArray = newArray.join('');
  newArray = newArray.replaceAll(' ', '');
  if (newArray !== string.replaceAll(' ', '')) {
    return false;
  } return true;
}

// define new variable newArray
// assign it the return of the split method being called with empty string as parameter on string Object
// call the reverse method on the newArray object with no parameters
// call the join method on the new value of the newArray object with an empty string as parameter
// replace all spaces with empty strings in newArray and string
// check if return values equal eachother
