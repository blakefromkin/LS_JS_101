/*
PROBLEM
Write a function that takes an array of integers as input, multiplies all of the integers together, divides the result by the number of entries in the array, and returns the result as a string with the value rounded to three decimal places.

INPUT: array of integers
OUTPUT: number as string, rounded to three decimal places

ALGORITHM
  - Set product = reducing the array by multiplying each element
  - Set avg = (product / array.length).toFixed(3)
  - Return String(avg)
*/

function multiAvg(arr) {
  let product = arr.reduce((a, b) => a * b);
  let avg = (product / arr.length).toFixed(3);

  return avg;
}

multiAvg([3, 5]);                   // "7.500"
multiAvg([2, 5, 7, 11, 13, 17]);    // "28361.667"
