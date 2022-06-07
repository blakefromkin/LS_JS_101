/*
PROBLEM

A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occurring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201.

INPUT: integer
OUTPUT: integer

EXPLICIT
  - Featured numbers are odd, multiple of 7, with no repeating digits
  - Must be the first featured num larger than input number
  - If there is no next featured number, issue an error



ALGORITHM
  - If the number is >= 9876543201, return an error
  - While num < 98765543201
    - Iterate it by 1
    - If it's not odd, continue
    - If it's not a multiple of 7, continue
    - If hasRepeatingDigits, continue
    - Return num
*/

function hasRepeatingDigits(num) {
  let numArr = num.toString().split('');
  for (let idx1 = 0; idx1 <= numArr.length - 2; idx1++) {
    for (let idx2 = idx1 + 1; idx2 <= numArr.length - 1; idx2++) {
      if (numArr[idx1] === numArr[idx2]) return true;
    }
  }
  return false;
}

function featured(num) {
  const LARGEST = 9876543201;
  if (num >= LARGEST) return 'There is no featured number greater than this number.';

  while (num < LARGEST) {
    num += 1;
    if (num % 2 !== 1) continue;
    if (num % 7 !== 0) continue;
    if (hasRepeatingDigits(num)) continue;

    return num;
  }
}

featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number...
