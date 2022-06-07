/*
PROBLEM
Write a function that takes a string as an argument and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.

Going to look into regex...

*/

function swapCase(string) {
  let newString = [];

  for (let char of string) {
    if (/[a-z]+/.test(char)) {
      newString.push(char.toUpperCase());
    } else if (/[A-Z]+/.test(char)) {
      newString.push(char.toLowerCase());
    } else {
      newString.push(char);
    }
  }
  return newString.join('');
}

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"
