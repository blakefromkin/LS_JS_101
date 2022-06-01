/*
PROBLEM
Write a function that takes an Array as an argument and reverses its elements in place. That is, mutate the Array passed into this method. The return value should be the same Array object.

INPUT: array
OUTPUT: same array, reversed

EXPLICIT
  - No using ".reverse()"
  - Should return the same array object, not a new one

ALGORITHM
  - Make a copy of the Array
  - Loop over the array
    - For each element, set it equal to the opposite element in the copy
  - Return the original array
*/

/*
Another option: doing something like:
[array[leftIndex], array[rightIndex]] =
     [array[rightIndex], array[leftIndex]];
*/

function reverse(arr) {
  let arrCopy = arr.slice();
  let lastIdx = arr.length - 1;

  for (let idx in arr) {
    arr[idx] = arrCopy[lastIdx - idx];
  }

  return arr;
}

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true
