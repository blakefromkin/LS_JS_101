/*
PROBLEM
Write a function that rotates the last count digits of a number. To perform the rotation, move the first of the digits that you want to rotate to the end and shift the remaining digits to the left.

INPUT: number
OUTPUT: number

EXAMPLES
rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912

IMPLICIT
  - The inputted count can't be bigger than the length of the digit

ALGORITHM
- Set a variable = the number transformed to a string, then an array
- Splice that array starting at the length - count, for 1 element
- Push that element onto the end of the array
- Join the array, transform it back to a number, and return it
*/

function rotateRightmostDigits(num, count) {
  let rotateArray = num.toString().split('');
  let rotated = rotateArray.splice(rotateArray.length - count, 1);

  return Number(rotateArray.concat(rotated).join(''));
  // concat instead of push because push returns a length, not an array
}

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917
