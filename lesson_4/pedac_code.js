/* Analysis of question:
2
4 6
8 10 12
14 16 18 20
The last number in each row n is n * (n + 1). So:
*/

// A pyramid of continuous even numbers where one is in the first row, two are in the second row, etc. Function returns the sum of all numbers in row n.

function evenPyramid(n) {
  let sum = 0;
  let counter = n * (n + 1);
  for (let idx = n; idx > 0; idx--) {
    sum += counter;
    counter -= 2;
  }
  return sum;
}

console.log(evenPyramid(4));
console.log(evenPyramid(10));
console.log(evenPyramid(2));
