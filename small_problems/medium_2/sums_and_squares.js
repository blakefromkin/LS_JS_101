/*
PROBLEM
Write a function that computes the difference between the square of the sum of the first count positive integers and the sum of the squares of the first count positive integers.

EXAMPLES
sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150

INPUT: positive int
OUTPUT: num

ALGORITHM
- squareSum function
  - takes in a number
  - let sum = 0
  - while the input num is > 0
    - Add it to sum
    - num--
  - return sum**2

- sumSquares function
  - takes in a number
  - let sum = 0
  - while the input num is > 0
    - add (num**2) to sum
  - return sum

- sumSquareDifference function
  - return squareSum(num) - sumSquares(num);
*/

function squareSum(num) {
  let sum = 0;
  while (num > 0) {
    sum += num;
    num -= 1;
  }
  return sum**2;
}

function sumSquares(num) {
  let sum = 0;
  while (num > 0) {
    sum += (num**2);
    num -= 1;
  }
  return sum;
}

function sumSquareDifference(num) {
  return squareSum(num) - sumSquares(num);
}

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150
