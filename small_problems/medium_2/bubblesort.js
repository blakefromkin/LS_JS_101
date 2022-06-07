/*
PROBLEM
Bubble Sort is one of the simplest sorting algorithms available. It is not an efficient algorithm, so developers rarely use it in real code. However, it is an excellent exercise for student developers. In this exercise, you will write a function that sorts an array using the bubble sort algorithm.

A bubble sort works by making multiple passes (iterations) through an array. On each pass, the two values of each pair of consecutive elements are compared. If the first value is greater than the second, the two elements are swapped. This process is repeated until a complete pass is made without performing any swaps. At that point, the array is completely sorted.

We can stop iterating the first time we make a pass through the array without making any swaps because this means that the entire array is sorted.

Write a function that takes an array as an argument and sorts that array using the bubble sort algorithm described above. The sorting should be done "in-place" — that is, the function should mutate the array. You may assume that the array contains at least two elements.

INPUT: array
OUTPUT: same array

EXPLICIT:
  - Iterate over the array, swapping the order if the first value is > second
  - Stop when a complete pass is made without making any swaps
  - At that point, return the array
  - Can assume array contains at least two elements

IMPLICIT
  - Can take strings as well as integers

ALGORITHM
  - Set a temp variable
  - Set noSwaps = false
  - while noSwaps is false
    - noSwaps = true
    - ForEach element in the array (include index as argument)
      - If the element one index ahead is < our element
        - temp = our element
        - element at our index = element at next index
        - element at next index = temp
        - noSwaps = false
  - return array
*/

function bubbleSort(array) {
  while (true) {
    let noSwaps = true;
    array.forEach((item, idx) => {
      if (item > array[idx + 1]) {
        array[idx] = array[idx + 1]; 
        array[idx + 1] = item;
        // ^^or [array[idx + 1], array[idx]] = [array[idx], array[idx + 1]];
        noSwaps = false;
      }
    });
    if (noSwaps === true) break;
  }
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
