function noDupes(str) {
  let newString = '';

  for (let index = 0; index < str.length; index++) {
    if (str[index] !== str[index + 1]) {
      newString += str[index];
    }
  }
  return newString;
}

console.log(noDupes('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(noDupes('4444abcabccba'));              // "4abcabcba"
console.log(noDupes('ggggggggggggggg'));            // "g"
console.log(noDupes('a'));                          // "a"
console.log(noDupes(''));                           // ""
