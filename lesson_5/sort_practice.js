let words = ['go', 'ahead', 'and', 'jump'];

// Task: Sort this (ascending) by the length of each word

let sortedWords = words.sort((a, b) => a.length - b.length);

console.log(sortedWords); // Should be sorted
console.log(words); // Should also be sorted! Same array.
