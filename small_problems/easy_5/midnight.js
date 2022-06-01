/*
PROBLEM
The time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

Write a function that takes a time using this minute-based format and returns the time of day in 24 hour format (hh:mm). Your function should work with any integer input.

You may not use javascript's Date class methods.

INPUT: Number of minutes (pos or neg)
OUTPUT: String in hh:mm format

EXPLICIT:
  - Pos num = after midnight. Neg num = before midnight.

ALGORITHM
- Let hour = Math.floor(inputMins / 60) % 12
- Let minute = inputMins % 60

- If inputMins >= 0
  - formatTime(hour, minute)
- Else if inputMins < 0
  - formatTime((12 + hour), (60 + minute))
*/

function formatTime(hour, minute) {
  if (hour === 24) hour = 0;

  hour = String(hour);
  minute = String(minute);
  if (hour.length === 1) {
    hour = '0'.concat(hour);
  }
  if (minute.length === 1) {
    minute = '0'.concat(minute);
  }

  return `${hour}:${minute}`;
}

function timeOfDay(mins) {
  let hour = Math.floor(mins / 60) % 24;
  let minute = mins % 60;

  if (mins >= 0) {
    return formatTime(hour, minute);
  } else {
    return formatTime(hour + 24, minute + 60);
  }
}
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
