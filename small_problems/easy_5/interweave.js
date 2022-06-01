/*
PEDAC
PROBLEM
Write a function that combines two arrays passed as arguments, and returns a new array that contains all elements from both array arguments, with each element taken in alternation.

You may assume that both input arrays are non-empty, and that they have the same number of elements.
Example: interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

INPUT: two non-empty, equal-length arrays
OUTPUT: one combined array

EXPLICIT
- Pass two arrays as arguments
- New array must have alternating values from both arrays
- Arrays are equal length and non-empty

ALGORITHM
- Set a new array variable
- For loop over ever element in first array
  - In each iteration, push arr1[idx] and then arr2[idx] to new array
- Return new array
*/


function interweave(arr1, arr2) {
  let newArray = [];

  for (let idx in arr1) {
    newArray.push(arr1[idx], arr2[idx]);
  }

  return newArray;
}

interweave([1, 2, 3], ['a', 'b', 'c']);



}
