function findFibonacciIndexByLength(length) {

  const FIBONACCI = [1n, 1n];
  let idx = 2;
  while (FIBONACCI[idx - 1].toString().length !== length) {
    FIBONACCI.push(FIBONACCI[idx - 1] + FIBONACCI[idx - 2]);
    idx += 1;
  }
  return idx;

}

console.log(findFibonacciIndexByLength(10000));
