/* Pseudocode:
START
SET readline

GET loan amount
WHILE loan amount is not a valid number
GET loan amount

GET loan duration in years and convert it to months
WHILE loan duration is not a valid number
GET loan duration in years and convert it to months

GET APR and convert it to monthly interest rate
WHILE APR is not a valid number
GET APR and convert it to monthly interest rate

SET monthlyPayment = formula with values input

PRINT "The monthly payment is $${monthlyPayment}."

*/

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === ''
  || Number.isNaN(Number(number))
  || number < 0;
}
while (true) {
  // Get loan amount
  prompt('What is the full loan amount?');
  let loanAmount = readline.question();

  while (invalidNumber(loanAmount)) {
    prompt('Please enter a valid number, like 4000.');
    loanAmount = readline.question();
  }
  loanAmount = Number(loanAmount);

  // Get loan duration in years and convert to months
  prompt('What is the loan duration in years?');
  let durationYears = readline.question();

  while (invalidNumber(durationYears) || Number(durationYears) <= 0) {
    prompt('Please enter a valid number, like 5.');
    durationYears = readline.question();
  }
  let durationMonths = Number(durationYears) * 12;

  // Get APR and convert to monthly interest
  prompt('What is the Annual Percentage Rate?');
  let apr = readline.question();

  while (invalidNumber(apr) || Number(loanAmount) <= 0) {
    prompt('Please enter a valid percentage, like 20.5 for 20.5%');
    apr = readline.question();
  }
  let monthlyInterest = (Number(apr) / 100) / 12;

  // Calculate monthly payment if no interest
  if (monthlyInterest === 0) {
    let monthlyPayment = loanAmount / durationMonths;
    prompt(`The monthly payment comes out to $${monthlyPayment.toFixed(2)}.`);
  } else {
    // Calculate monthly payment with monthly interest
    let monthlyPayment = loanAmount *
    (monthlyInterest / (1 - Math.pow((1 + monthlyInterest),(-durationMonths))));
    prompt(`The monthly payment comes out to $${monthlyPayment.toFixed(2)}.`);
  }

  // Let user run program again if they choose.
  prompt('Would you like to calculate again? (y) or (n)');
  let again = readline.question();
  while (!['y', 'n'].includes(again)) {
    prompt("Please enter 'y' or 'n'.");
    again = readline.question();
  }
  if (again === 'n') {
    break;
  }
}
