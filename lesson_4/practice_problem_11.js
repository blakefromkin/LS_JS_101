let statement = "The Flintstones Rock";

// Create an object that expresses the frequency with which each letter appears

let letterCounts = {};

for (let ltr of statement) {
  if (ltr === ' ') continue;

  if (letterCounts[ltr]) {
    letterCounts[ltr] += 1;
  } else {
    letterCounts[ltr] = 1;
  }
}

console.log(letterCounts);
