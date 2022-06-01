/*
PROBLEM
Write a function that takes a number as an argument. If the argument is a positive number, return the negative of that number. If the argument is a negative number, return it as-is.

INPUT: number
OUTPUT: negative number

EXPLICIT:
  - If the number is positive, make it negative and return it
  - If the number is negative, return it

IMPLICIT:
  - If the number is 0, return -0

ALGORITHM
  - If number < 0, return number
  - Otherwise, multiply the number by -1 and return it
*/

function negative(num) {
  return num < 0 ? num : num * -1;
}

negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0
