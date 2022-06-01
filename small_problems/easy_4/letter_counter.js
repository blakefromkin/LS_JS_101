function wordSizes(string) {
  if (!string.length) {
    return {};
  }

  let wordArray = string.split(' ');
  let wordLengths = {};

  for (let word of wordArray) {
    if (wordLengths[word.length]) {
      wordLengths[word.length] += 1;
    } else {
      wordLengths[word.length] = 1;
    }
  }

  return wordLengths;
}

console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));
// { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes('Four score and seven.'));
// { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey man, how is it going?'));
// { '2': 2, '3': 2, '4': 1, '6': 1 }
console.log(wordSizes(''));
// {}
