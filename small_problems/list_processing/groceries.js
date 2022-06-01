/*
PROBLEM
Write a function that takes a grocery list in a two-dimensional array and returns a one-dimensional array. Each element in the grocery list contains a fruit name and a number that represents the desired quantity of that fruit. The output array is such that each fruit name appears the number of times equal to its desired quantity.

EXAMPLE
buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

QUESTIONS
- Possible that any arrays are empty?

ALGORITHM
  - Set a groceryList array
  - For each subarray
    - Set [fruit, amount] to that subarray
    - For "amount" times
      - Push "fruit" to groceryList
  - Return groceryList
*/

function buyFruit(list) {
  let groceryList = [];

  list.forEach(item => {
    let [fruit, amount] = item;
    for (let num = 0; num < amount; num++) {
      groceryList.push(fruit);
    }
  });

  return groceryList;
}

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
