/*
PROBLEM
Building on the previous exercise, write a function that returns true or false based on whether or not an inventory item is available. As before, the function takes two arguments: an inventory item and a list of transactions. The function should return true only if the sum of the quantity values of the item's transactions is greater than zero. Notice that there is a movement property in each transaction object. A movement value of 'out' will decrease the item's quantity.

EXPLICIT
  - Add for "in", subtract for "out"
  - Return true if the sum of quantity values > 0
  - Return false <= 0
  - Use transactionsFor from previous exercise

ALGORITHM
  - Declare transactionsFor
  - Declare isItemAvailable
    - Set a variable = the result of transactionsFor the specified id
    - Reduce that array
      - accum, item as inputs
      - If item movement is out, return accum - the item quantity value
      - Otherwise, return accum + the item quantity value
    - Save the array result to a variable
    - If that value is > 0, return true. Otherwise, return false.
*/

function transactionsFor(id, list) {
  return list.filter(trans => {
    return trans.id === id;
  });
}

function isItemAvailable(id, list) {
  let itemTransactions = transactionsFor(id, list);
  let sum = itemTransactions.reduce((accum, item) => {
    if (item.movement === 'in') {
      return accum + item.quantity;
    } else {
      return accum - item.quantity;
    }
  }, 0);

  return sum > 0;
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

isItemAvailable(101, transactions);     // false
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions);     // true
