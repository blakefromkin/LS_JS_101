/*
Display the initial empty 3x3 board.
Ask the user to mark a square.
Computer marks a square.
Display the updated board state.
If it's a winning board, display the winner.
If the board is full, display tie.
If neither player won and the board is not full, go to #2
Play again?
If yes, go to #1
Goodbye!
*/

// Display the initial empty board (see this is updated below)
// Looking at our pseudocode, we know this board will come up a lot.
  // So, we should make it a reusable function
/*function displayBoard() {
  console.log('');
  console.log('     |     |');
  console.log('     |     |');
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log('     |     |');
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log('     |     |');
  console.log('     |     |');
  console.log('');
}
*/
// How will a user mark a square? Well, we should represent the squares...
/*let board = {
  1: 'X', // top left
  2: ' ', // top center
  3: ' ', // top right
  4: ' ', // middle left
  5: 'O', // center
  6: ' ', // middle right
  7: ' ', // bottom left
  8: ' ', // bottom center
  9: 'X', // bottom right
};
*/

const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const GAMES_FOR_MATCH_WIN = 2;
const FIRST_MOVE = 'choose'; // Options: me, computer, choose

// Update our displayBoard function to take the board as an argument and use it
// To display the board properly
function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

// Test it out with our board
// displayBoard(board);

// Now, how do we initialize a board object? Rather than typing it ourselves.
function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = ' ';
  }

  return board;
}

// Prompt player to choose a square
let readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function playerChoosesSquare(board) {
  let square; // declared here so we can use it outside the loop

  while (true) {
    prompt(`Choose a square: ${joinOr(emptySquares(board))}`);
    square = readline.question().trim(); // input trimmed to allow spaces in input

    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }
  board[square] = 'X';
}

// Function used to format the "Choose a square" prompt
function joinOr(arr, firstSep = ', ', lastSep = 'or') {
  // For arrays with a length of 0, 1, or 2:
  if (!arr.length) return '';
  if (arr.length === 1) return `${arr[0]}`;
  if (arr.length === 2) {
    return String(arr[0]) + ` ${lastSep} ` + String(arr[1]);
  }

  // For any other length of array...
  let last = String(arr.splice(-1, 1, lastSep));
  return arr.join(firstSep) + ' ' + last;
}

// Have computer choose a square

function computerChoosesSquare(board) {
  // Check for offensive and defensive moves
  let offensiveSquare = findAtRiskSquare(board, COMPUTER_MARKER);
  if (offensiveSquare) {
    board[offensiveSquare] = COMPUTER_MARKER;
    return;
  }

  let defensiveSquare = findAtRiskSquare(board, HUMAN_MARKER);
  if (defensiveSquare) {
    board[defensiveSquare] = COMPUTER_MARKER;
    return;
  }
  // If no offensive or defensive moves, pick square 5
  if (board[5] === INITIAL_MARKER) {
    board[5] = COMPUTER_MARKER;
    return;
  }

  // If square 5 is filled, pick a random square
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
}

function findAtRiskSquare(board, marker) {
  for (let line of WINNING_LINES) {
    let filledSquares = line.filter(square => board[square] === marker).length;
    let emptySquare = line.find(square => board[square] === INITIAL_MARKER);
    if (filledSquares === 2 && emptySquare !== undefined) {
      return emptySquare;
    }
  }
  return null;
}

// This initially appeared in playerChoosesSquare and computerChoosesSquare..
// Which made it clear it needs to be its own function
function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

// Functions for keeping match score
function initalizeScoreboard() {
  return {
    player: 0,
    computer: 0
  };
}

function updateScoreboard(gameWinner, scoreboard) {
  switch (gameWinner) {
    case 'Player':
      scoreboard.player += 1;
      break;
    case 'Computer':
      scoreboard.computer += 1;
      break;
    default:
      break;
  }
}

function isMatchWinner(scoreboard) {
  return !!detectMatchWinner(scoreboard);
}

function detectMatchWinner(scoreboard) {
  if (scoreboard.player === GAMES_FOR_MATCH_WIN) return 'Player';
  if (scoreboard.computer === GAMES_FOR_MATCH_WIN) return 'Computer';
  // no match winner
  return null;
}

// Define the two functions that would end a game
function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return detectWinner(board); // defined below
}

function detectWinner(board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7]             // diagonals
  ];

  // Using a loop instead of forEach so we can return early if need be
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];

    if (
        board[sq1] === HUMAN_MARKER &&
        board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
        board[sq1] === COMPUTER_MARKER &&
        board[sq2] === COMPUTER_MARKER &&
        board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

// THE ACTUAL GAME LOOP

while (true) {
  // Outer loop for matches
  let scoreboard = initalizeScoreboard();

  while (true) {
    // Inner loop for each game
    let board = initializeBoard();

    let firstMove = FIRST_MOVE;
    if (firstMove === 'choose') {
      prompt('Which player should go first? Type "me" or "computer".');
      let first = readline.question();

      while (first !== 'me' && first !== 'computer') {
        prompt('Invalid. Type "me" or "computer".');
        first = readline.question();
      }
      firstMove = first;
      debugger;
    }

    while (true) {
      // Innermost loop for player turns
      displayBoard(board);

      if (firstMove === 'me') {
        playerChoosesSquare(board);
        if (someoneWon(board) || boardFull(board)) break;

        computerChoosesSquare(board);
        if (someoneWon(board) || boardFull(board)) break;

      } else if (firstMove === 'computer') {
        computerChoosesSquare(board);
        displayBoard(board);
        if (someoneWon(board) || boardFull(board)) break;

        playerChoosesSquare(board);
        if (someoneWon(board) || boardFull(board)) break;
      }
    }
    displayBoard(board);

    // Update the scoreboard and check for match winner
    if (someoneWon(board)) {
      updateScoreboard(detectWinner(board), scoreboard);
    }

    if (isMatchWinner(scoreboard)) {
      prompt(`${detectMatchWinner(scoreboard)} won the match!`);
      scoreboard = initalizeScoreboard();

    // If no match winner, check if someone won a game
    } else if (someoneWon(board)) {
        prompt(`${detectWinner(board)} won!`);
        prompt(`Match score: Player ${scoreboard.player}, Computer ${scoreboard.computer}`);
      } else {
        prompt("It's a tie!");
        prompt(`Match score: Player ${scoreboard.player},
          Computer ${scoreboard.computer}`);
      }

    prompt('Play again? (y or n)');
    let answer = readline.question().toLowerCase()[0];
    if (answer !== 'y') break;
  }
  break;
}

prompt('Thanks for playing Tic Tac Toe!');

// END GAME LOOP
