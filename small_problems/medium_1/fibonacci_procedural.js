/*
PROBLEM
Rewrite your recursive fibonacci function so that it computes its results without using recursion.

PREVIOUS FUNCTION
function fibonacci(number) {
  if (number < 2) return number; // 0 if number is 0, 1 if number is 1
  return fibonacci(number - 1) + fibonacci(number - 2);
}
*/

function fibonacci(num) {
  if (num < 2) return 1;

  let prev2 = 1;
  let prev1 = 1;
  let answer = 0;

  for (let count = 2; count < num; count++) {
    answer = prev2 + prev1;
    prev2 = prev1;
    prev1 = answer;
  }
  return answer;
}

fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050
