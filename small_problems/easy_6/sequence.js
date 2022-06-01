/*
PROBLEM
Create a function that takes two integers as arguments. The first argument is a count, and the second is the starting number of a sequence that your function will create. The function should return an array containing the same number of elements as the count argument. The value of each element should be a multiple of the starting number.

You may assume that the count argument will always be an integer greater than or equal to 0. The starting number can be any integer. If the count is 0, the function should return an empty array.

INPUT: 2 integers, one for count and one for starting num
OUTPUT: Array w/ length count

EXPLICIT:
  - Count of 0 should return empty array
  - Each element should be a multiple of starting element

ALGORITHM
  - Set newArray = []
  - For idx while idx is less than count
  - push the starting number * the index + 1
*/

function sequence(count, startNum) {
  let newArray = [];
  for (let idx = 0; idx < count; idx++) {
    newArray.push(startNum * (idx + 1));
  }
  return newArray;
}

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []
