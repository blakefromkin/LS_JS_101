/*
PROBLEM
Write a function that takes a sentence string as an argument and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

INPUT: string
OUTPUT: string
*/

function wordToDigit(string) {
  let map = {
    zero: '0', one: '1', two: '2', three: '3', four: '4', five: '5', six: '6',
    seven: '7', eight: '8', nine: '9'
  };

  return string.split(' ').map(word => {
    let punct = '';

    // Check for punctuation
    if (!(word[word.length - 1] >= 'a' && word[word.length - 1] <= 'z')) {
      punct = word[word.length - 1];
      word = word.substring(0, word.length - 1);
    }

    // If number, change. Return word with possible punctuation.
    return Object.keys(map).includes(word) ?
      map[word] + punct : word + punct;
  })
    .join(' ');
}

wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."
