function xor(val1, val2) {
  if ((val1 && !val2) || (val2 && !val1)) {
    return true;
  } else {
    return false;
  }
}
// QUICKER VERSION:
// return !!((value1 && !value2) || (value2 && !value1));



console.log(xor(5, 0));
console.log(xor(false, true));
console.log(xor(1, 1));
console.log(xor(true, true));
