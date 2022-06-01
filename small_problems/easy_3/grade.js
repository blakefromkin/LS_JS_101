function getGrade() {
  let readline = require('readline-sync');

  let grade1 = readline.question('Enter first grade (as a number): ');
  let grade2 = readline.question('Enter second grade (as a number): ');
  let grade3 = readline.question('Enter third grade (as a number): ');

  let avg = (Number(grade1) + Number(grade2) + Number(grade3)) / 3;
  console.log(avg);

  if (avg >= 90 && avg <= 100) {
    console.log('Your letter grade is A');
  } else if (avg >= 80 && avg < 90) {
    console.log('Your letter grade is B');
  } else if (avg >= 70 && avg < 80) {
    console.log('Your letter grade is C');
  } else if (avg >= 60 && avg < 70) {
    console.log('Your letter grade is D');
  } else {
    console.log('Your letter grade is F');
  }
}

getGrade();
