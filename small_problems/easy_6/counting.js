/*
PROBLEM
Write a function that takes an integer argument and returns an array containing all integers between 1 and the argument (inclusive), in ascending order.

You may assume that the argument will always be a positive integer.

INPUT: positive integer
OUTPUT: array of integers

ALGORITHM
  - WHILE num > 0
    - unshift num to the new array
    - decrement num
  - return array
*/

function sequence(num) {
  let sequence = [];
  while (num > 0) {
    sequence.unshift(num);
    num -= 1;
  }
  return sequence;
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]
