// Use all_substrings.js, but return a list of all palindromic substrings
// Assume single characters are not palindromes
// Case-sensitive

function leadingSubstrings(str) {
  let substrings = [];
  for (let idx in str) {
    substrings.push(str.substring(0, Number(idx) + 1));
    // Number(idx) because idx is a string
  }
  return substrings;
}

function substrings(str) {
  let allSubs = [];
  for (let idx in str) {
    let subs = leadingSubstrings(str.slice(idx));
    allSubs = allSubs.concat(subs);
  }
  return allSubs;
}

function palindromes(str) {
  let allSubs = substrings(str);

  return allSubs.filter(substr => {
    if (substr.length <= 1) return false;
    return substr === substr.split('').reverse().join('');
  });
}

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
