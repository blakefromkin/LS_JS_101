function doubleNonDoubles(num) {
  let numString = String(num);

  if (numString.slice(0, numString.length / 2)
  === numString.slice(numString.length / 2)) {
    return num;
  } else {
    return num * 2;
  }
}

console.log(doubleNonDoubles(103103));
console.log(doubleNonDoubles(334433));
console.log(doubleNonDoubles(444));
