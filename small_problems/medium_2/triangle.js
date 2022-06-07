/*
PROBLEM
A triangle is classified as follows:

Equilateral: All three sides are of equal length.
Isosceles: Two sides are of equal length, while the third is different.
Scalene: All three sides are of different lengths.
To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the lengths of the three sides of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

INPUT: three lengths (nums)
OUTPUT: string

ALGORITHM
  - isValid helper function
    - takes an array of the three slides as arguments
    - Make a copy of the array
    - if any are === 0, return false
    - Set longest to the max of the three lengths (using reduce)
    - Splice out the first number that's === the longest
    - return (sum of elements in array (reduce) > longest)

  - main triangle function
    - Set an array of the three lengths
    - If not isValid(array) return 'invalid'

    - Check for equilateral
      - if .every element in the array is equal to the first element
        - return 'equilateral'

    - Check if scalene
      - If none of the second two array elements are equal to the first
        - return 'scalene'

    - return 'isosceles'
*/

function isValid(sidesArr) {
  let sidesCopy = sidesArr.slice();

  if (sidesCopy.some(side => side === 0)) return false;

  let longest = sidesCopy.reduce((a, b) => Math.max(a, b));
  sidesCopy.splice(sidesCopy.findIndex(a => a === longest), 1);

  return sidesCopy.reduce((a, b) => a + b) > longest;
}

function triangle(side1, side2, side3) {
  let sidesArr = [side1, side2, side3];
  if (!isValid(sidesArr)) return 'invalid';

  if (sidesArr.every(side => side === sidesArr[0])) return 'equilateral';
  if (!sidesArr.slice(1).some(side => side === sidesArr[0])) return 'scalene';
  return 'isosceles';
}

triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"
