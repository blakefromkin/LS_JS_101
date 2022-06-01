/*
PROBLEM
Write a function that takes one argument, a positive integer, and returns a list of the digits in the number.

INPUT: positive integer
OUTPUT: array of integers
EXPLICIT:
  - Return an array of the digits in the input number
QUESTION
  - Do we need to protect against 0, negative, or non-zero inputs?

ALGORITHM
  - Return num.toString().split('').map(str => Number(str));

*/

function digitList(num) {
  return num.toString().split('').map(str => Number(str));
}


digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]
