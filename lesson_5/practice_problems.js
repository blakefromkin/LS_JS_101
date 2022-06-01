// PROBLEM 1
// How would you order the following array of number strings by descending numeric value
// (largest number value to smallest)?

let arr = ['10', '11', '9', '7', '8'];
arr.sort((a, b) => Number(b) - Number(a));


/*
PROBLEM 2
How would you order the following array of objects based on the year of publication of each book, from the earliest to the latest?
*/

let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

books.sort((objA, objB) => {
  return Number(objA['published']) - Number(objB['published'])
});



// PROBLEM 3
// For each of these collection objects, demonstrate how you would access the letter g

let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
// arr1[2][1][3]

let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
// arr2[0]['third'][0]

let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
// arr3[2]['third'][0][0]

let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
// obj1.b[1]

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }}
// Object.keys(obj2.third)[0]


// PROBLEM 4
// For each of these collection objects, demonstrate how you would change the value 3 to 4.
let arr1 = [1, [2, 3], 4];
// arr1[1] = 4

let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
// arr2[2] = 4

let obj1 = { first: [1, 2, [3]] };
// obj1.first[2][0] = 4

let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
// obj2.a.a[2] = 4


// PROBLEM 5
// Compute and display the total age of the male members of the family.
let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let age =
  Object.values(munsters).filter(obj => obj.gender === 'male').reduce((a, b) => {
    return a + b.age
  }, 0);

console.log(age);

// PROBLEM 6
// print the name, age, and gender of each family member^
// Ex: (Name) is a (age)-year-old (male or female).

for (let person in munsters) {
  console.log(`${person} is a ${munsters[person]['age']}-year-old ${munsters[person]['gender']}.`);
}


// PROBLEM 7
// Given the following code, what will the final values of a and b be? Try to answer without running the code.
let a = 2;
let b = [5, 8];
let arr = [a, b];

arr[0] += 2;
arr[1][0] -= a;

// Answer: a will be 2, b will be [3, 8]. Line 94 doesn't update a, just arr[0]


// PROBLEM 8
// Using the forEach method, write some code to output all vowels from the strings in the arrays. Don't use a for or while loop.
let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

Object.values(obj).forEach(arr => {
  arr.forEach(str => {
    let chars = str.split('');
    chars.forEach(char => {
      if ('aeiou'.includes(char)) {
        console.log(char);
      }
    })
  })
});


// PROBLEM 9
// Given the following data structure, return a new array with the same structure, but with the values in each subarray ordered -- alphabetically or numerically as appropriate -- in ascending order.
let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

arr.map(subArr => {
  if (typeof subArr[0] === 'string') {
    // we have an array of strings
    return subArr.slice().sort();
  } else {
    // we have an array of numbers
    return subArr.slice().sort((a, b) => a - b);
  }
});

// PROBLEM 10
// Same^, but descending order
arr.map(subArr => {
  return subArr.slice().sort((a, b) => {
    if (typeof a === 'number') {
      return b - a;
    }

    if (a < b) {
      return 1
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
});

// PROBLEM 11
// Given the following data structure, use the map method to return a new array identical in structure to the original but, with each number incremented by 1. Do not modify the original data structure.
let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let arr2 = arr.map(obj => {
  let newObj = {};
  for (let key in obj) {
    newObj[key] = obj[key] + 1;
  }
  return newObj;
});



// PROBLEM 12
// Given the following data structure, use a combination of methods, including filter, to return a new array identical in structure to the original, but containing only the numbers that are multiples of 3.

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let threes = arr.map(sub => {
  return sub.filter(num => num % 3 === 0);
});



// PROBLEM 13
// Given the following data structure, sort the array so that the sub-arrays are ordered based on the sum of the odd numbers that they contain.
let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.sort((arr1, arr2) => {
  let sum1 = arr1.filter(num => num % 2 !== 0).reduce((a, b) => a + b);
  let sum2 = arr2.filter(num => num % 2 !== 0).reduce((a, b) => a + b);
  return sum1 - sum2;
});


// PROBLEM 14
// Given the following data structure write some code to return an array containing the colors of the fruits and the sizes of the vegetables. The sizes should be uppercase, and the colors should be capitalized.
let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let values = Object.values(obj);
let finalArray = values.map(obj => {
  if (obj.type === 'fruit') {
    return obj.colors.map(color => {
      return color[0].toUpperCase() + color.slice(1);
    })
  } else {
    return obj.size.toUpperCase();
  }
});


// PROBLEM 15
// Given the following data structure, write some code to return an array which contains only the objects where all the numbers are even.
let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let filtered = arr.filter(obj => {
  let values = Object.values(obj);
  return values.every(arr => {
    return arr.every(num => num % 2 === 0);
  });
});


// PROBLEM 16
// Given the following data structure, write some code that defines an object where the key is the first item in each subarray, and the value is the second.
let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

let newObject = {};
arr.forEach(subArr => {
  newObject[subArr[0]] = subArr[1];
});


// PROBLEM 17
// Each UUID consists of 32 hexadecimal characters (the digits 0-9 and the letters a-f) represented as a string. The value is typically broken into 5 sections in an 8-4-4-4-12 pattern, e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.

// Write a function that takes no arguments and returns a string that contains a UUID.

function createUUID() {
  let characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  let sections = [8, 4, 4, 4, 12];

  let uuid = '';
  sections.forEach((section, sectionIndex) => {
    for (let index = 1; index <= section; index++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      uuid += characters[randomIndex];
    }

    if (sectionIndex < sections.length - 1) {
      uuid += '-';
    }
  });

  return uuid;
}
