/*
PROBLEM
Write a function that takes a string, doubles every character in the string, and returns the result as a new string.
EXAMPLES:
repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""

INPUT: string
OUTPUT: string with every char doubled

ALGORITHM
  - Set strArray to the string split by character
  - Set dupeArray to strArray sliced fully
  - Set doubleArray to an empty array
  - For each character & index in strArray, push the character at that index from strArray and dupeArray to doubleArray
  - Return doubleArray joined
*/

function repeater(string) {
  let doubledArray = [];
  for (let char of string) {
    doubledArray.push(char, char);
  }

  return doubledArray.join('');
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""

// A REALLY SHORT SOLUTION:
// return string.split("").map(char => char + char).join("");
