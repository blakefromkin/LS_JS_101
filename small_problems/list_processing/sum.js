/*
PROBLEM
Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this without using for, while, or do...while loops - instead, use a series of method calls to perform the sum.

INPUT: positive integer
OUTPUT: integer

ALGORITHM
  - Change the integer to a string
  - Change the string to an array
  - Reduce the array to the sum of its elements
  - Return the sum
*/

function sum(num) {
  return num.toString().split('')
  .reduce((a, b) => Number(a) + Number(b));
}

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45
