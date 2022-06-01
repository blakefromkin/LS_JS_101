/*
PROBLEM
Write a function that takes a non-empty string argument and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.

INPUT: non-empty string
OUTPUT: Middle character(s)

EXPLICIT
  - If the string length is odd, return one char
  - If the string length is even, return two chars

ALGORITHM
  - IF str.length % 2
    - RETURN the character at str.length / 2
  - ELSE
    - RETURN the character at str.length / 2 concat'ed with the char before
 */

function centerOf(str) {
  let middle = str.length / 2;
  debugger;

  if (str.length % 2) { // Tests if odd
    return str.charAt(middle);
  } else {
    return str.charAt(middle - 1) + str.charAt(middle);
  }
}

centerOf('x');                 // "x"
centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
