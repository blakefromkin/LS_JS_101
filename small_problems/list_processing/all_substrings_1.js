// Same as all_substrings, but using list processing methods in substrings()
// Don't use forEach

function leadingSubstrings(str) {
  let substrings = [];
  for (let idx in str) {
    substrings.push(str.substring(0, Number(idx) + 1));
    // Number(idx) because idx is a string
  }
  return substrings;
}

function substrings(str) {
  let charArray = str.split('');
  let subsArray = charArray.map((_, idx) => {
    return leadingSubstrings(charArray.slice(idx).join(''));
  });

  return subsArray.map(subArr => {
    return subArr.reduce((a, b) => {
      return a + ',' + b;
    });
  }).join(',').split(',');
}

substrings('abcde');
