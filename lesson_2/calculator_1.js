/* This better version of calculator creates a "prompt" function to
differentiate prompts from user input. It also checks that user input is valid,
and uses a switch (which is more readable) to create results */

/* This program also asks a user if they want to do another calculation. It accomplishes this by nesting it all in a function called "calculate" and returning the function again if the user chooses 'yes'.

An even better way would be to nest it all in a while loop that runs while(true) and breaks if the user enters no */

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function calculate() {
  prompt('Welcome to Calculator!');

  prompt("What's the first number?");
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt("Hmm... that doesn't look like a valid number.");
    number1 = readline.question();
  }

  prompt("What's the second number?");
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt("Hmm... that doesn't look like a valid number.");
    number2 = readline.question();
  }

  prompt('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('Must choose 1, 2, 3 or 4');
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
    }

    prompt(`The result is: ${output}`);

    prompt('Would you like to perform another calculation?');
    let again = readline.question();

    while(!['yes', 'no'].includes(again)) {
      prompt("Must type 'yes' or 'no'");
      again = readline.question();
    }

    return again === 'yes' ? calculate() : 1;
}

calculate();
