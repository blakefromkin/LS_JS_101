const MAP = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function numToString(number) {
  let finalString = '';

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);

    finalString = MAP[remainder] + finalString;
  } while (number > 0);

  return finalString;
}

function negNumToString(num) {
  if (num < 0) {
    return '-' + numToString(num * -1);
  } else {
    return numToString(num);
  }
}

console.log(negNumToString(-500));
console.log(negNumToString(48753));
