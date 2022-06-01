function isPalindromicNum(num) {
  let strNum = num.toString();
  return (strNum === Array.from(strNum).reverse().join(''));
}

console.log(isPalindromicNum(528));     // false
console.log(isPalindromicNum(10501));   // true
console.log(isPalindromicNum(00100));
