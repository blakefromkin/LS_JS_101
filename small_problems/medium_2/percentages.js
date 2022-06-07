/*
PROBLEM
Write a function that takes a string and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither
You may assume that the string will always contain at least one character.

EXAMPLES
letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

INPUT: string
OUTPUT: object

IMPLICIT
  - Round percentages to two decimal points
  - Object values should be string versions of the percentages

ALGORITHM
  - createPercentage helper function
    - Takes in two number arguments... the number of characters that fit a certain
    criteria (a la lowercase), and the total length of the string
    - Return (chars / length * 100) rounded to two decimal points

  - main letterPercentages function
    - takes string as only argument
    - Set percentObject = {}
    - Set lowers = the length of the array of lowercase characters
    - Set uppers = the length of the array of uppercase characters

    - Set lowerPercent = createPercentage(...)
    - Set upperPercent = createPercentage(...)
    - Set percentObject['lowercase'] = String(lowerPercent)
    - Set percentObject['uppercase'] = String(upperPercent)
    - Set percentObject['neither'] = String(100 - (lowerP + upperP))

    return percentObject
*/

function createPercentage(length, subLength) {
  return ((subLength / length) * 100).toFixed(2);
}

function letterPercentages(string) {

  let lowers = string.split('').filter(cha => (cha >= 'a' && cha <= 'z')).length;
  let uppers = string.split('').filter(cha => (cha >= 'A' && cha <= 'Z')).length;
  let neither = string.length - (lowers + uppers);

  let lowerP = createPercentage(string.length, lowers);
  let upperP = createPercentage(string.length, uppers);
  let neitherP = createPercentage(string.length, neither);

  return {
    lowercase: String(lowerP),
    uppercase: String(upperP),
    neither: String(neitherP)
  }
}

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
