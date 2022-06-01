/*
PROBLEM
Write a function that takes a string argument containing one or more words and returns a new string containing the words from the string argument. All five-or-more letter words should have their letters in reverse order. The string argument will consist of only letters and spaces. Words will be separated by a single space.

INPUT: string
OUTPUT: new string

EXPLICIT
  - No punctuation in the input string
  - Words with length of 5+ should have their letters reversed

ALGORITHM
  - Split the string into an array at the spaces
  - For every element in that array, check the length of the string
    - If the length of the string is >= 5, split the string into an array, reverse the order, and join it again
*/

function reverseWords(string) {
  let array = string.split(' ');

  for (let word in array) {
    if (array[word].length >= 5) {
      array[word] = array[word].split('').reverse().join('');
    }
  }

  return array.join(' ');
}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"
