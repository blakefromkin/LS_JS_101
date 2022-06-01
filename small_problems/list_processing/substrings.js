/*
PROBLEM
Write a function that takes a string argument and returns a list of substrings of that string. Each substring should begin with the first letter of the word, and the list should be ordered from shortest to longest.

INPUT: string
OUTPUT: array of substrings

EXPLICIT:
  - Each substring should start at the start of the string

ALGORITHM
  - SET a results array variable
  - FOR every character in the string
    - Make a substring, starting at 0 and ending at that character
    - Add that substring to the results array
  - Return the results array
*/

function leadingSubstrings(str) {
  let substrings = [];
  for (let idx in str) {
    substrings.push(str.substring(0, Number(idx) + 1));
    // Number(idx) because idx is a string
  }
  return substrings;
}

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
