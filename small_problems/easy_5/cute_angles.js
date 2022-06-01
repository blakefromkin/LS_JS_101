// PEDAC
/*
Write a function that takes a floating point number representing an angle between 0 and 360 degrees and returns a string representing that angle in degrees, minutes, and seconds. You should use a degree symbol (˚) to represent degrees, a single quote (') to represent minutes, and a double quote (") to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.

Input: floating point number
Output: string of numbers and symbols

Explicit:
  - Input is between 0 and 360
  - Minute = degree * 60. Seconds = minute * 60
  - Round values
  - 360 should return 0s for minutes and seconds
Implicit:
  - 0 should return 0 for all values

ALGORITHM
  - Guard clause: If deg is 0 or 360, return all 0s in the string
  - Set degrees = Math.floor of deg
  - Set minutes to 60 times deg - degrees
  - Set seconds to 60 times minutes - Math.floor(minutes)
  - Apply necessary 0 padding to all three above
    - Check if the string version of the number has a length of 1
    - If so pad the start with a '0'
  - Return an interpolated string with those values and the symbols
*/

function dms(deg) {
  if (deg === 0 || deg === 360) return "0°00'00\"";

  if (deg < 0 && Math.abs) {
    return `${360 + deg}°00'00"`;
  } else if (deg > 360) {
    return `${deg - 360}°00'00"`;
  }

  let degrees = Math.floor(deg);
  let minutes = (deg - degrees) * 60;
  let seconds = Math.floor((minutes - Math.floor(minutes)) * 60);
  minutes = Math.floor(minutes);

  degrees = padZeroes(degrees);
  minutes = padZeroes(minutes);
  seconds = padZeroes(seconds);
  return `${degrees}°${minutes}'${seconds}"`;
}

function padZeroes(num) {
  let strNum = String(num);
  return strNum.length === 1 ? '0' + strNum : strNum;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"

console.log(dms(-1));   // 359°00'00"
console.log(dms(400));  // 40°00'00"
console.log(dms(-40));  // 320°00'00"
console.log(dms(-420)); // 300°00'00"
