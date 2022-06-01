let rlSync = require('readline-sync');
let n = rlSync.question('Please enter an integer greater than 0:\n');
let operation = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product.\n');

if (operation === 's') {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log(`The sum of the integers between 1 and ${n} is ${sum}`);
} else {
  let prod = 1;
  for (let i = 1; i <= n; i++) {
    prod *= i;
  }
  console.log(`The product of the integers between 1 and ${n} is ${prod}`);
}
