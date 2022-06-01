/*
PROBLEM
Write a function that takes two array arguments, each containing a list of numbers, and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. The returned array should be sorted in ascending numerical order.

You may assume that neither argument will be an empty array.

INPUT: Two arrays of integers
OUTPUT: One array of integers

EXPLICIT
  - Sort the output array in ascending numerical order

IMPLICIT
  - Repeats should be allowed in the returned array

ALGORITHM
  - SET a results array
  - FOR every element in the first array
    - FOR every element in the second array
      - Add the two elements together
      - Push the sum onto the results array
  - SORT the results array in ascending numerical order
*/

function multiplyAllPairs(arr1, arr2) {
  let products = [];

  for (let num of arr1) {
    for (let num2 of arr2) {
      products.push(num * num2);
    }
  }
  return products.sort((a, b) => a - b);
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]
