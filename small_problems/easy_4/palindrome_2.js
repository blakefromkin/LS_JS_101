function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

function isRealPalindrome(str) {
  let lowerStr = str.toLowerCase();
  let finalStr = Array.from(lowerStr).filter(ltr => isAlphaNum(ltr)).join('');

  return isPalindrome(finalStr);
}

function isAlphaNum(char) {
  if (char >= 'a' && char <= 'z' ) {
    return true;
  } else if (char >= '0' && char <= '9') {
    return true;
  } else {
    return false;
  }
}

console.log(isRealPalindrome('123ab321'));            // false
console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
