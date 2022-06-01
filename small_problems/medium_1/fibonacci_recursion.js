/*
PROBLEM
Write a recursive function that computes the nth Fibonacci number, where nth is an argument passed to the function.

EXAMPLE of different recursive sum function
function sum(num) {
  if ( num === 1) {
    return 1;
  }
  return num + sum(num - 1);
}
*/

function fibonacci(number) {
  if (number < 2) return number; // 0 if number is 0, 1 if number is 1
  return fibonacci(number - 1) + fibonacci(number - 2);
}

fibonacci(1);       // 1
fibonacci(2);       // 1
fibonacci(3);       // 2
fibonacci(4);       // 3
fibonacci(5);       // 5
fibonacci(12);      // 144
fibonacci(20);      // 6765
