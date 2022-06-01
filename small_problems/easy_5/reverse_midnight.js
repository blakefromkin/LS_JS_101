/*
PROBLEM
Write two functions that each take a time of day in 24 hour format, and return the number of minutes before and after midnight, respectively. Both functions should return a value in the range 0..1439.

INPUT: A string in hh:mm format
OUTPUT: integer representing mins before/after midnight

EXPLICIT
  - Two functions, one for before midnight and one for after
    - Before takes neg in, after takes pos in
  - Answers should fall between 0 and 1439

ALGORITHM
  afterMidnight
    - let hours = first two numbers of input string converted to a Number
    - let minutes = last two numbers of input string converted to a Number
    - return hours * 60 + minutes

  beforeMidnight
    - let minutes = 60 - last two numbers of input string as Number
    - let hours = 25 - first two numbers of input string converted to a Number
    - return hours * 60 + minutes
*/

function afterMidnight(time) {
  if (time === "00:00" || time === "24:00") return 0;

  let hours = Number(time.slice(0, 2));
  let minutes = Number(time.slice(3));
  return (hours * 60) + minutes;
}

function beforeMidnight(time) {
  if (time === "00:00" || time === "24:00") return 0;

  let hours = 23 - Number(time.slice(0, 2));
  let minutes = 60 - Number(time.slice(3));
  return (hours * 60) + minutes;
}


console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
