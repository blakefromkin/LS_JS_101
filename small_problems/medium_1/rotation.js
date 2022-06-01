/*
PROBLEM
Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

If the input is not an array, return undefined.
If the input is an empty array, return an empty array.

INPUT: array
OUTPUT: new array

EXPLICIT
  - Move first element to end of array
    - Do not modify original array
  - If the input is not an array, return undefined
  - If the input is empty, return an empty array

IMPLICIT
  - If the input has one element, return a copy of the array

ALGORITHM
  - Check that the input is an array with isArray
    - If not, return undefined
  - Check that the input is not empty
    - If it is, return []
  - Set a copy of the array
  - Shift the first item and push it onto the end of the array
  - Return the copied array
*/

function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return [];

  let newArr = arr.slice();
  newArr.push(newArr.shift());

  return newArr;
}

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]
