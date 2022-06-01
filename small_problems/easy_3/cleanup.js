function cleanUpString(str) {
  const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  //Alt to using something like ALPHABET is saying char >= 'a' && char <= 'z' etc 

  let idx = 0;
  while (idx < str.length) {
    if (ALPHABET.includes(str[idx])) {
      idx++;
    } else if (str[idx - 1] !== ' ') {
      str = str.replace(str[idx], ' ');
      idx++;
    }
    else {
      // Since this "mutates" the string, we don't iterate idx
      str = str.substring(0, idx) + str.substring(idx + 1);
    }
  }
  return str;
}

console.log(cleanUpString("---what's my +*& line?"));
console.log(cleanUpString("2492389##Q%(*&*&(@%))"));
console.log(cleanUpString("    B#$*&*&L3425225A%()@$)($#)K902834E"));
