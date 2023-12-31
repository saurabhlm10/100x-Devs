/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  const sanitizedStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

  const characters = sanitizedStr.split('');
  const reversedCharacters = sanitizedStr.split('').reverse();

  return characters.every((char, index) => char === reversedCharacters[index]);
}

console.log(isPalindrome('A man a plan a canal Panama'))

module.exports = isPalindrome;
