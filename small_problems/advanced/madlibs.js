/*
Build a madlibs program that takes a text "template" as input, plugs in a selection of randomized nouns, verbs, adjectives, and adverbs into that text, and then returns it. You can build your lists of nouns, verbs, adjectives, and adverbs directly into your program. Your program should read this text and, for each line, place random words of the appropriate types into the text and return the result.

The challenge of this program isn't just about writing your solution—it's about choosing the structure of the text templates. Choose the right way to structure your templates and this problem becomes much easier. Consequently, this exercise is a bit more open-ended since the input is also something that you'll define for yourself.

INPUT: string with numbers where the words should be input
OUTPUT: string

ALGO
  - madLibs function
    - takes formatted string as input
    - Changes the string to an array of words (separated by spaces)
    - Passes that array to inputWords and saves the result to
    - return the resulting array joined at the spaces

  - inputWords
    - takes array as argument
    - set punctuation to '.,!?'
    - Use map on the array
      - set punct to null
      - For each char in punctuation
        - if the word includes punctuation
        - word = a substring of the word without the punctuation
        - punct = char
      - If the word is '1', word =  getRandom(1) (an adjective)
      - If the word is '2', word = getRandom(2) etc etc
      - return word + punct
    - return the new array
*/

function madLibs(string) {
  let strArr = inputWords(string.split(' '));
  return strArr.join(' ');
}

function inputWords(arr) {
  let punctuation = ['!', '.', ',', '?'];

  arr = arr.map((word, idx) => {
    let punct = '';
    punctuation.forEach(char => {
      if (word.includes(char)) {
        punct = char;
        word = word.substring(0, word.length - 1);
      }
    });
    return getRandom(word) + punct;
  });
  return arr;
}

function getRandom(numString) {
  let nums = '1234';
  if (!nums.includes(numString)) return numString;

  let adjectives = ['quick', 'ugly', 'sleepy', 'noisy', 'hungry'];
  let nouns = ['man', 'hair', 'cat', 'underwear', 'pizza'];
  let verbs = ['eats', 'flies', 'sings', 'smacks', 'kills'];
  let adverbs = ['easily', 'quietly', 'jealously', 'nakedly', 'drunkenly'];

  switch (numString) {
    case '1':
      return adjectives[Math.floor(Math.random() * adjectives.length)];
      break;
    case '2':
      return nouns[Math.floor(Math.random() * nouns.length)];
      break;
    case '3':
      return verbs[Math.floor(Math.random() * verbs.length)];
      break;
    case '4':
      return adverbs[Math.floor(Math.random() * verbs.length)];
      break;
    default:
      return "There's been an error";
  }
}

let template1 = "One day, the 1 2 walks into the supermarket. He looks around 4, unsure of which food he 3 most. Does he want a 2? Or a 2? He 4 3 the cashier what she 3 for her family.";

console.log(madLibs(template1));
