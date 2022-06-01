// Make this code (fails when the input is 0 or a negative number) better:
/*function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}*/

function betterFactors(number) {
  if (number <= 0) {
    console.log('number must be positive');
    return 0;
  }

  let divisor = number;
  let factors = [];

  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}

console.log(betterFactors(48));
console.log(betterFactors(-50));
