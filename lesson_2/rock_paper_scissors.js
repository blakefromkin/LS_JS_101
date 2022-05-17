const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];
let scoreboard = {
  user: 0,
  computer: 0,
  matchWin: false
};

function prompt(message) {
  console.log(`=> ${message}`);
}

function keepScore(winner) {
  // Tally wins
  if (winner === 'user') {
    scoreboard.user += 1;
  } else if (winner === 'comp') {
    scoreboard.computer += 1;
  }
  // Reset after one side reaches 3 wins
  if (Object.values(scoreboard).includes(3)) {
    scoreboard.user = 0;
    scoreboard.computer = 0;
    scoreboard.matchWin = true;
  } else {
    scoreboard.matchWin = false;
  }
}

function userWins(choice, computerChoice) {
  return (choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'paper');
}

function displayWinner(choice, computerChoice) {
  console.clear();
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if (userWins(choice, computerChoice)) {
    keepScore('user');
    prompt(scoreboard.matchWin ? 'You won the match!' : 'You win the game!');
  } else if (choice === computerChoice) {
    prompt("It's a tie!");
  } else {
    keepScore('comp');
    prompt(scoreboard.matchWin ?
      'Computer won the match!' : 'Computer wins the game!');
  }
}


while (true) {
  // Get user's choice
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  // Set computer's choice randomly
  let computerChoice =
  VALID_CHOICES[Math.floor(Math.random() * VALID_CHOICES.length)];

  // Display results
  displayWinner(choice, computerChoice);


  // Prompt to play again
  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer !== 'n' && answer !== 'y') {
    prompt('Please enter "y" for yes or "n" for no.');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') {
    break;
  }
  console.clear();
}
