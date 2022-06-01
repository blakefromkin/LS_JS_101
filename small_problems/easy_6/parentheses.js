/*
PROBLEM
Write a function that takes a string as an argument and returns true if all parentheses in the string are properly balanced, false otherwise. To be properly balanced, parentheses must occur in matching '(' and ')' pairs.

INPUT: string
OUTPUT: boolean

SOLUTION
  - Create a variable that is incremented for each open parenthesis, and decremented for each closed
  - If it goes negative, return false
  - If it's not 0 at the end, return false

ALGORITHM
  - Make an array from the string
  - Make a counter variable = 0
  - Iterate over the array
      - Increment counter for open parentheses
      - Decrement counter for closed parentheses
      - Return false if counter is negative
  - If counter is 0, return true. Otherwise, return false.
*/

function isBalanced(string) {
  let strArray = string.split('');
  let counter = 0;

  for (let char of strArray) {
    if (char === '(') {
      counter += 1;
    } else if (char === ')') {
      counter -= 1;
    }
    if (counter < 0) return false;
  }
  return counter === 0 ? true : false;
}

console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);

console.log(isBalanced("What ((is))) up(") === false);
