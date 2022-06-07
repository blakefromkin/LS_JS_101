// SET CONSTANTS
const NUM_OF_SUITS = 4;
const LIMIT = 21;
const ROYALS = ['Jack', 'Queen', 'King'];
const DEALER_LIMIT = 17;
const GAMES_FOR_MATCH_WIN = 5;

// IMPORT READLINE
let readline = require('readline-sync');

// PROMPT FUNCTION
function prompt(message) {
  console.log(`=> ${message}`);
}

// JOIN-AND FUNCTION
function joinAnd(arr, delimiter = ', ', word = 'and') {
  switch (arr.length) {
    case 0:
      return '';
    case 1:
      return `${arr[0]}`;
    case 2:
      return arr.join(` ${word} `);
    default:
      return arr.slice(0, arr.length - 1).join(delimiter) +
             `${delimiter}${word} ${arr[arr.length - 1]}`;
  }
}

// INITIALIZE DECK FUNCTION
function initializeDeck() {
  let deck = {};

  for (let card = 2; card <= 10; card++) {
    deck[card] = NUM_OF_SUITS;
  }
  for (let royal of ROYALS) {
    deck[royal] = NUM_OF_SUITS;
  }
  deck['Ace'] = NUM_OF_SUITS;

  return deck;
}

// GET RANDOM CARD FUNCTION
function randomCard(deck) {
  let deckKeys = Object.keys(deck);
  let card = deckKeys[Math.floor(Math.random() * deckKeys.length)];

  updateDeck(deck, card);

  return card;
}

// UPDATE DECK FUNCTION
function updateDeck(deck, card) {
  deck[card] -= 1;
  if (deck[card] === 0) delete deck[card];
}

// SUM HAND FUNCTION
function handTotal(handArray) {
  // Sum everything but aces
  let sum = handArray.reduce((accum, card) => {
    if (ROYALS.includes(card)) return accum + 10;
    if (card === 'Ace') return accum + 0;
    return accum + Number(card);
  }, 0);

  // Handle aces
  let aceArray = handArray.filter(card => card === 'Ace');
  if (aceArray.length > 0) sum = handleAces(aceArray, sum);

  return sum;
}

// HANDLE ACES FUNCTION
function handleAces(aceArray, sum) {
  aceArray.forEach(_ => {
    if ((11 + sum) > LIMIT) {
      sum += 1;
    } else {
      sum += 11;
    }
  });

  return sum;
}

// HIT OR STAY FUNCTION
function askHitOrStay() {
  let hitStayArray = ['hit', 'stay'];
  prompt(`Hit or stay?`);
  let hitOrStay = readline.question().trim().toLowerCase();
  while (!hitStayArray.includes(hitOrStay)) {
    prompt('Invalid response. Type "hit" or "stay".');
    hitOrStay = readline.question().trim().toLowerCase();
  }

  return hitOrStay;
}

// DETECT BUST FUNCTION
function detectBust(score) {
  return score > LIMIT;
}

// DETECT DIRECT HIT WIN
function detectDirectHitWin(score) {
  return score === LIMIT;
}

// DETECT PLAYER WIN
function detectPlayerWin(dealerScore, playerScore) {
  if (playerScore === LIMIT) return true;
  if (dealerScore < playerScore) return true;
  return false;
}

// ANNOUNCE PLAYER WIN
function announcePlayerWin(dealerScore, playerScore) {
  prompt(`Your score is ${playerScore}. Dealer's score is ${dealerScore}. You win!\n`);
}

// DETECT DEALER WIN FUNCTION
function detectDealerWin(dealerScore, playerScore) {
  if (dealerScore === LIMIT) return true;
  if (dealerScore > playerScore) return true;
  return false;
}

// ANNOUNCE DEALER WIN FUNCTION
function announceDealerWin(dealerScore, playerScore) {
  prompt(`Your score is ${playerScore}. Dealer's score is ${dealerScore}. Dealer wins!\n`);
}

// PLAY AGAIN FUNCTION
function playAgain() {
  let acceptable = ['y', 'Y', 'yes', 'Yes', 'n', 'N', 'no', 'No'];

  prompt('Would you like to play again? Type "Y" or "N".');
  let response = readline.question().trim();
  while (!acceptable.includes(response)) {
    prompt('Invalid response. Type "Y" or "N".');
    response = readline.question().trim();
  }

  if (acceptable.slice(0, 4).includes(response)) {
    return true;
  } else {
    return false;
  }
}

// DISPLAY USER/DEALER INFO FUNCTION
function displayInfo(hand, score, player) {
  if (player === 'player') {
    prompt(`Your cards are ${joinAnd(hand)} and your score is ${score}.`);
  } else if (player === 'dealer') {
    prompt (`The dealer's cards are ${joinAnd(hand)} and their score is ${score}.`);
  }
}

// FUNCTIONS FOR KEEPING MATCH SCORE
function initalizeScoreboard() {
  return {
    player: 0,
    dealer: 0
  };
}

function updateScoreboard(gameWinner, scoreboard) {
  switch (gameWinner) {
    case 'player':
      scoreboard.player += 1;
      break;
    case 'dealer':
      scoreboard.dealer += 1;
      break;
    default:
      break;
  }
}

function isMatchWinner(scoreboard) {
  return !!detectMatchWinner(scoreboard);
}

function detectMatchWinner(scoreboard) {
  if (scoreboard.player === GAMES_FOR_MATCH_WIN) return 'You';
  if (scoreboard.dealer === GAMES_FOR_MATCH_WIN) return 'Dealer';
  // no match winner
  return null;
}


// START GAME LOOP ***********************************************************

while (true) { // MATCH LEVEL
  let scoreboard = initalizeScoreboard();

  while (true) { // GAME LEVEL
    console.clear();

    // SET INITIAL VARIABLES
    let deck = initializeDeck();
    let gameOver = false;
    let hitOrStay;
    let newPlayerCard;
    let newDealerCard;

    let playerHand = [randomCard(deck), randomCard(deck)];
    let playerScore = handTotal(playerHand);

    let dealerHand = [randomCard(deck), randomCard(deck)];
    let dealerScore = handTotal(dealerHand);

    prompt('Welcome to 21!\n');
    prompt(`The dealer has ${dealerHand[0]} and an unknown card.`);

    // USER TURN
    while (true) {
      // Tell user the current hands and scores
      displayInfo(playerHand, playerScore, 'player');

      // Ask if they want to hit or stay
      hitOrStay = askHitOrStay();
      console.clear();

      if (hitOrStay === 'hit') { // If they hit
        // Draw a new card. Update hand and score.
        newPlayerCard = randomCard(deck);
        playerHand.push(newPlayerCard);
        playerScore = handTotal(playerHand);

        // Tell them their new card
        prompt(`You drew ${newPlayerCard}`);

        // Check if they busted
        if (detectBust(playerScore)) {
          prompt('You busted!');
          updateScoreboard('dealer', scoreboard);
          gameOver = true;
          break;
        }

        // Check if they got a direct hit win
        if (detectDirectHitWin(playerScore)) {
          prompt(`Your score is ${LIMIT}. You win the game!`);
          updateScoreboard('player', scoreboard);
          gameOver = true;
          break;
        }
      }

      if (hitOrStay === 'stay') {
        // Check if they got a direct hit win
        if (detectDirectHitWin(playerScore)) {
          prompt(`Your score is ${LIMIT}. You win the game!`);
          updateScoreboard('player', scoreboard);
          gameOver = true;
          break;
        }
        break;
      }
    } // END USER TURN


    if (gameOver === true) {
      console.log(scoreboard);
      // Check for match winners
      if (isMatchWinner(scoreboard)) {
        prompt(`${detectMatchWinner(scoreboard)} won the match!`);
      }
      // Ask to play again
      if (playAgain()) continue;
      break;
    }

    // DEALER TURN
    console.clear();

    prompt('The dealer reveals their second card...');

    while (true) {
      displayInfo(dealerHand, dealerScore, 'dealer');

      // Check if dealer won
      if (detectDealerWin(dealerScore, playerScore)) {
        announceDealerWin(dealerScore, playerScore);
        updateScoreboard('dealer', scoreboard);
        break;
      }

      // Check if dealer is above dealer limit
      if (dealerScore >= DEALER_LIMIT) {
        prompt(`By rule, dealer stays.`);
        // If player win...
        if (detectPlayerWin(dealerScore, playerScore)) {
          announcePlayerWin(dealerScore, playerScore);
          updateScoreboard('player', scoreboard);
        } else { // If tie...
          prompt(`You both scored ${playerScore}. It's a tie!`);
        }
        break;
      }

      // Otherwise, dealer hits again...
      newDealerCard = randomCard(deck);
      dealerHand.push(newDealerCard);
      dealerScore = handTotal(dealerHand);

      // Tell player what dealer drew and their new hand and score
      prompt(`The dealer draws ${newDealerCard}`);

      // Check if dealer busted
      if (detectBust(dealerScore)) {
        prompt(`Dealer busted with a score of ${dealerScore}. You win!`);
        updateScoreboard('player', scoreboard);
        break;
      }
    } // END DEALER TURN

    // Check for match wins
    if (isMatchWinner(scoreboard)) {
      prompt(`${detectMatchWinner(scoreboard)} won the match!`);
      break;
    }

    // Finally, ask to play again
    if (playAgain()) continue;
    break;
  }

  if (isMatchWinner(scoreboard)) {
    if (playAgain()) continue;
    break;
  }
  break;
}

// END GAME LOOP *************************************************************
