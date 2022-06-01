/*
PROBLEM
Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").
EXAMPLE
let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2

INPUT: one array
OUTPUT: logging each element alongside its number of occurances

ALGORITHM
  - Set countsObj = {}
  - Loop over each element in arr
    - If the element already appears in the object, iterate it
    - Otherwise, set it to 1
  - Loop over every key in countsObj
  - Console.log key => value
*/

function setCountsObj(arr) {
  let countsObj = {};

  for (let item of arr) {
    if (countsObj[item]) {
      countsObj[item] += 1;
    } else {
      countsObj[item] = 1;
    }
  }
  return countsObj;
}

function countOccurrences(arr) {
  let countsObject = setCountsObj(arr);

  for (let key in countsObject) {
    console.log(`${key} => ${countsObject[key]}`);
  }
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'suv', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);
