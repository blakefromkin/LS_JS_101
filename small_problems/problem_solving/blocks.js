/*
PROBLEM
A collection of spelling blocks has two letters per block, as shown in this list:

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. You can also only use each block once.

Write a function that takes a word string as an argument and returns true if the word can be spelled using the set of blocks, false otherwise. You can consider the letters to be case-insensitive when you apply the rules.

INPUT: string
OUTPUT: boolean

EXPLICIT
  - Word can only use one letter from each block once
  - Once the block is used, it can't be used again

ALGORITHM
  - Set a constant = an array of subarray blocks
  - Set the string to uppercase

  - For every character in the string
    - Set availableBlock = false
    - ForEach block in the array
      - If the block has that character
        - splice the block out
        - availableBlock = true
    - if availableBlock is false, return false

  - return true
*/

function isBlockWord(word) {
  word = word.toUpperCase();
  let blocks = [['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'], ['N', 'A'],
                ['G', 'T'], ['R', 'E'], ['F', 'S'], ['J', 'W'], ['H', 'U'],
                ['V', 'I'], ['L', 'Y'], ['Z', 'M']];

  for (let char of word) {
    let availableBlock = false;

    // Check if there's a block with that character left
    for (let idx in blocks) {
      if (blocks[idx].includes(char)) { // if yes, remove that block
        blocks.splice(idx, 1);
        availableBlock = true;
        break;
      }
    }
    if (availableBlock === false) return false; // if no, return false
  }
  return true;
}

isBlockWord('floW');       // true
isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true
isBlockWord('APPLE');      // false
isBlockWord('apple');      // false
isBlockWord('apPLE');      // false
isBlockWord('Box');        // false
