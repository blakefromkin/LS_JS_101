/*
PROBLEM
Write a function that takes an array of integers between 0 and 19 and returns an array of those integers sorted based on the English word for each number:

INPUT: array of ints
OUTPUT: sorted array of ints

ALGORITHM
  - Create a map object to pair each number with its word
  - Sort the numbers based on the alphabetic order of their key in the object
  - Return the sorted array
*/

function alphabeticNumberSort(arr) {
  let map = {
    '0': 'zero', '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five',
    '6': 'six', '7': 'seven', '8': 'eight', '9': 'nine', '10': 'ten',
    '11': 'eleven', '12': 'twelve', '13': 'thirteen', '14': 'fourteen',
    '15': 'fifteen', '16': 'sixteen', '17': 'seventeen', '18': 'eighteen',
    '19': 'nineteen'
  };
  // Properties like^ don't need quotes!!
  // Would have been smarted to have map be an array... using the number arguments as indexes

  arr.sort((a, b) => {
    if (map[String(a)] < map[String(b)]) {
      return -1;
    } else if (map[String(a)] > map[String(b)]) {
      return 1;
    } else return 0;
  });

  return arr;
}

alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
