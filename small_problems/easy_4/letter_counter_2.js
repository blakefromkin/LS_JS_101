function wordSizes(string) {
  if (!string.length) {
    return {};
  }

  let wordArray = string.split(' ');
  let wordLengths = {};

  for (let word of wordArray) {
    let chars = Array.from(word).filter(char => char >= 'A' && char <= 'z');
    if (wordLengths[chars.length]) {
      wordLengths[chars.length] += 1;
    } else {
      wordLengths[chars.length] = 1;
    }
  }

  return wordLengths;
}

console.log(wordSizes('Four score and seven.'));
// { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes("What's up doc?"));
// { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));
// {}
