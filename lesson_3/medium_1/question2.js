function caseSwap(string) {
  let charArray = Array.from(string);

  for (let idx in charArray) {
    let char = charArray[idx];

    if (char >= 'a' && char <= 'z') {
      charArray[idx] = char.toUpperCase();
    } else if (char >= 'A' && char <= 'Z') {
      charArray[idx] = char.toLowerCase();
    }
  }

  return charArray.join('');
}

/* BETTER SOLUTION
  munstersDescription.split("").map(function(char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join("");
*/

console.log(caseSwap("The Munsters are creepy and spooky."));
console.log(caseSwap("tHiS iS lIkE tHe SpOnGeBoB mEmE."));
