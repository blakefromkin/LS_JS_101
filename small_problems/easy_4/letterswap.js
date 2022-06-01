function letterSwap(string) {
  let wordsArray = string.split(' ');
  let charHolder = '';

  for (let word in wordsArray) {
    let letters = Array.from(wordsArray[word]);

    charHolder = letters[0];
    letters[0] = letters[letters.length - 1];
    letters[letters.length - 1] = charHolder;

    wordsArray.splice(word, 1, letters.join(''));
  }

  return wordsArray.join(' ');
}

console.log(letterSwap('Oh what a wonderful day it is'));
// "hO thaw a londerfuw yad ti si"
console.log(letterSwap('Abcde'));
// "ebcdA"
console.log(letterSwap('a'));
// "a"
