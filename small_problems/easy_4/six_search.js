function sixSearch() {
  let readline = require('readline-sync');

  let numString = readline.question('Enter 1st number: ') + ',';
  numString += readline.question('Enter 2nd number: ') + ',';
  numString += readline.question('Enter 3rd number: ') + ',';
  numString += readline.question('Enter 4th number: ') + ',';
  numString += readline.question('Enter 5th number: ');

  let lastNum = readline.question('Enter last number: ');

  let answer = numString.includes(lastNum) ?
    `The number ${lastNum} appears in ${numString}.` :
    `The number ${lastNum} does not appear in ${numString}.`;

  console.log(answer);
}

sixSearch();
