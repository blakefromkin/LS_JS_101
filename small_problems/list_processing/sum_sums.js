/*
PROBLEM
Write a function that takes an array of numbers and returns the sum of the sums of each leading subsequence in that array. Examine the examples to see what we mean. You may assume that the array always contains at least one number.

INPUT: array of nums
OUTPUT: number

EXPLICIT
- No empty input arrays

IMPLICIT
- Leading subsequence means subsequence starting with first element

ALGORITHM
  - Function that sums a subsequence
    - Reduce the sequence by adding each element
    - Return that value

  - Function that runs that function^ for each leading subsequence
    - Adds each value to an array
    - Uses the first function to sum the array and return that value
*/

function sumSequence(arr) {
  return arr.reduce((a, b) => a + b);
}

function sumOfSums(arr) {
  let sumsArray = [];

  arr.forEach((_, idx) => {
    sumsArray.push(sumSequence(arr.slice(0, idx + 1)));
  });

  return sumSequence(sumsArray);
}

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35
