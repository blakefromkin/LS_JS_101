/*
PROBLEM
Write a function that does this:
joinOr([1, 2, 3]);               // => "1, 2, or 3"
joinOr([1, 2, 3], '; ');         // => "1; 2; or 3"
joinOr([1, 2, 3], ', ', 'and');  // => "1, 2, and 3"
joinOr([]);                      // => ""
joinOr([5]);                     // => "5"
joinOr([1, 2]);                  // => "1 or 2"

INPUT: an array, an optional separator, and another optional separator
OUTPUT: string

EXPLICIT:
  - Should "join" the array into a string, but with a joining word for last
  element
  - Second argument separates all elements but the last
  - Third argument separates the last from the rest

ALGORITHM
  - Set the default value of second argument to ', '
  - Set default value of third argument to 'or'

  - Splice the final element out into a variable and turn it to a string
    - Swap the third argument in for it
  - Join that array with the second argument
  - Concatenate the resulting string with the other string
  - Return the string
*/

function joinOr(arr, delimiter = ', ', word = 'or') {
  switch (arr.length) {
    case 0:
      return '';
    case 1:
      return `${arr[0]}`;
    case 2:
      return arr.join(` ${word} `);
    default:
      return arr.slice(0, arr.length - 1).join(delimiter) +
             `${delimiter}${word} ${arr[arr.length - 1]}`;
  }
}

joinOr([1, 2, 3]);               // => "1, 2, or 3"
joinOr([1, 2, 3], '; ');         // => "1; 2; or 3"
joinOr([1, 2, 3], ', ', 'and');  // => "1, 2, and 3"
joinOr([]);                      // => ""
joinOr([5]);                     // => "5"
joinOr([1, 2]);                  // => "1 or 2"
