/*
PROBLEM
Write a function that takes two array arguments, each containing a list of numbers, and returns a new array that contains the product of each pair of numbers from the arguments that have the same index. You may assume that the arguments contain the same number of elements.

INPUT: Two arrays of equal length
OUTPUT: New array
EXPLICIT:
  - Multiply numbers from the same index in the two arrays, and place them in the same index of the new array

ALGORITHM
  - Set a newArray
  - Loop over every element in arr1
    - For each element, multiply it by the element of the same index in arr2
    - Push the product to newArray
  - Return newArray
*/

function multiList(arr1, arr2) {
  let newArray = [];

  for (let idx in arr1) {
    newArray.push((arr1[idx] * arr2[idx]));
  }
  return newArray;
}

multiList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]
