/*
PROBLEM
Write a function that displays an 8-pointed star in an NxN grid, where N is an odd integer that is supplied as an argument to the function. The smallest such star you need to handle is a 7x7 grid (i.e., when N is 7).

EXAMPLE
star(7);
// logs
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *

INPUT: odd integer
OUTPUT: log a star of *'s

EXPLICIT
  - N will be 7 at the smallest
  - N will always be odd

IMPLICIT
  - The middle row will display n stars and 0 spaces
  - Other rows will display 3 stars
  - Outer edges will have (n/2 - 1) spaces between each star
    - And 0 spaces outside of the stars
  - Non-outer edge rows will have one less star between, and one more star outside
    - Until we reach middle row

ALGORITHM
- outerStar function
  - takes in n, row, innerspaces, outerspaces
  -  return ' '*outerspaces + * + ' '*innerspaces + * + ' '*innerspaces + * + ' '*outerSpaces


- let stars = 3
- let innerSpaces = n - stars
- let outerSpaces = 0

- for n rows
  - if row < n / 2
    - console.log(outerStar) inputting n, row, innerspace, outerspace
    - innerSpaces -= 1
    - outerSpaces += 1
  - else if row > n / 2
    - console.log(outerStar) inputting n, row, innerspace, outerspace
    - innerSpaces += 1
    - outerSpaces -= 1
  - else
    - console.log('*' repeated n times )
*/

function outerStar(innerSpaces, outerSpaces) {
  return ' '.repeat(outerSpaces) + '*' + ' '.repeat(innerSpaces) + '*' +
    ' '.repeat(innerSpaces) + '*' + ' '.repeat(outerSpaces);
}

function star(n) {
  const STARS = 3;
  let innerSpaces = (n - STARS) / 2;
  let outerSpaces = 0;

  // PRINT THE STAR
  for (let row = 1; row <= n; row++) {
    if (row < n / 2) { // top half
      console.log(outerStar(innerSpaces, outerSpaces));
      innerSpaces -= 1;
      outerSpaces += 1;

    } else if (row > (n / 2) + 1) { // bottom half
      console.log(outerStar(innerSpaces, outerSpaces));
      innerSpaces += 1;
      outerSpaces -= 1;

    } else { // middle row
      console.log('*'.repeat(n));
      innerSpaces += 1;
      outerSpaces -= 1;
    }
  }
}

star(7);
star(9);
