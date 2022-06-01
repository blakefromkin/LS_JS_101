
function doubleConsonants(string) {

  const CONSONANTS = [
    'B', 'b', 'C', 'c', 'D', 'd', 'F', 'f', 'G', 'g', 'H', 'h', 'J', 'j', 'K',
    'k', 'L', 'l', 'M', 'm', 'N', 'n', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's',
    'T', 't', 'V', 'v', 'W', 'w', 'X', 'x', 'Z', 'z'
  ];

  let doubledArray = [];
  for (let char of string) {
    if (CONSONANTS.includes(char)) {
      doubledArray.push(char, char);
    } else doubledArray.push(char);
  }
  return doubledArray.join('');
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""
