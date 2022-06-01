/*
PROBLEM
Write a function that takes a string argument consisting of a first name, a space, and a last name, and returns a new string consisting of the last name, a comma, a space, and the first name.

INPUT: string
OUTPUT: string

ALGORITHM
  - Split the string at the space and save it to strArray
  - Reverse the array
  - Return the array's first element + ', ' + second element
*/

function swapName(name) {
  return name.split(' ').reverse().join(', ');
}

swapName('Joe Roberts');    // "Roberts, Joe"
