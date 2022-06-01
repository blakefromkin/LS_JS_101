function retirementAge() {
  const readline = require('readline-sync');

  let age = Number(readline.question('What is your age? '));

  let retireAge = Number(readline.question('At what age would you like to retire? '));
  while (age >= retireAge) {
    console.clear();
    retireAge = Number(readline.question(`Please enter a retirement age older than your current age: `));
  }

  let diff = retireAge - age;
  let currentYear = new Date().getFullYear();

  console.clear();
  console.log(`It's ${currentYear}. You will retire in ${currentYear + diff}.`);
  console.log(`You only have ${diff} more years of work to go!`);
}

retirementAge();
