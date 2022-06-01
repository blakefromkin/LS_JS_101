// PEDAC
/*
Write a function that takes an array as an argument and returns an array that contains two elements, each of which is an array. Put the first half of the original array elements in the first element of the return value, and put the second half in the second element. If the original array contains an odd number of elements, place the middle element in the first half array.

input: array
output: array with two subarrays
explicit:
  - If the length of the original array is odd, add the middle element to the first subarray
  - The first subarray should have elements from the first half
  - The second subarray should have elements from the second half
implicit:
  - If the array is empty, return two empty subarrays
  - If the array has one element, return it in the first subarray, followed by an empty subarray

Algorithm
  - Set midway as Math.ceil(length of array / 2)
  - Set sub1 = array.slice(0, midway)
  - Set sub2 = array.slice(midway)
  - Return [sub1, sub2]
*/


function halvsies(arr) {
  let midway = Math.ceil(arr.length / 2);
  let sub1 = arr.slice(0, midway);
  let sub2 = arr.slice(midway);
  return [sub1, sub2];
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]
