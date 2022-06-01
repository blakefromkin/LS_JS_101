/*
PROBLEM
Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

EXAMPLES
maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845

INPUT: number
OUTPUT: rotated number

EXPLICIT
  - First, rotate the full length of the digit
  - Then, rotate starting with a count of length - 1
  - Then, rotate starting with a count of length - 2, etc. until a count of 2
  - Leading zeroes at the end get dropped

ALGORITHM
  - Set rotateRightmostDigits() function
  - Set maxRotation function
    - Set count to the length of the digit
    - while count > 1
      - digit (input) = rotateRightmostDigits(digit, count)
      - count--
    - return digit
*/

function rotateRightmostDigits(num, count) {
  let rotateArray = num.toString().split('');
  let rotated = rotateArray.splice(rotateArray.length - count, 1);

  return Number(rotateArray.concat(rotated).join(''));
  // concat instead of push because push returns a length, not an array
}

function maxRotation(num) {
  let count = num.toString().length;

  while (count > 1) {
    num = rotateRightmostDigits(num, count);
    count -= 1;
  }
  return num;
}

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845
