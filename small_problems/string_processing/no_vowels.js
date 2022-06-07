/*
PROBLEM
Write a function that takes an array of strings and returns an array of the same string values, but with all vowels (a, e, i, o, u) removed.

INPUT: array of strings
OUTPUT: array of strings

ALGORITHM
- set vowels = 'aeiou'
- set newArray = map strings
  - set newChars = []
  - For each char in string
    - if vowels doesn't include it
      - push it to newChars
  - return newChars joined

- return newArray
*/

function removeVowels(stringsArr) {
  let vowels = 'aeiouAEIOU';

  stringsArr = stringsArr.map(string => {
    let newChars = [];
    for (let char of string) {
      if (!vowels.includes(char)) newChars.push(char);
    }
    return newChars.join('');
  });

  return stringsArr;
}

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]
