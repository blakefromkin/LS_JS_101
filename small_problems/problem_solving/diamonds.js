/*
PROBLEM
Write a function that displays a four-pointed diamond in an nxn grid, where n is an odd integer supplied as an argument to the function. You may assume that the argument will always be an odd integer.

INPUT: odd number
OUTPUT: console logged diamond

ALGORITHM
  - Set stars = 1
  - For each row
      - Log (n - stars / 2)  spaces
      - Then log stars # of *
      - if row < n/2
        - stars += 2
      - if row > n/2
        - stars -= 2
*/

function diamond(n) {
  let stars = 1;

  for (let row = 1; row <= n; row++) {
    console.log(`${' '.repeat((n - stars) / 2)}${'*'.repeat(stars)}`);

    if (row < n / 2) { // top half
      stars += 2;
    } else { // middle and bottom half 
      stars -= 2;
    }
  }
}

diamond(3);
diamond(9);
diamond(1);
diamond(21);
