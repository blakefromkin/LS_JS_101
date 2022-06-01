function utfValue(str) {
  let total = 0;

  for (let i in str) {
    total += str.charCodeAt(i);
  }
  return total;
}

console.log(utfValue('Four score'));
