// PEDAC
/*
Write a function that takes two arrays as arguments and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.

input: two arrays
output: one array
explicit:
  - There must be no duplicates in the new array
  - Both arguments will always be arrays
  - Must return an array with combined values (no dupes)
questions:
  - If both arrays are empty, should it return an empty array?
  - Are the values in the array always numbers?

Algorithm
  - Loop through the first array and check if that item is in the second array
  -   If it is, splice that item from the second array
  - Loop through both arrays to remove internal dupes
  - Set str1 to the first array joined with commas
  - Set str2 to the second array joined with commas
  - Concatenate the two strings
  - Split the resulting string at the commas and return that array
*/
function union(arr1, arr2) {
  removeCrossDupes(arr1, arr2);
  removeInternalDupes(arr1);
  removeInternalDupes(arr2);

  return arr1.concat(arr2);
}


function removeCrossDupes(arr1, arr2) {
  for (let item of arr1) {
    while (arr2.includes(item)) {
      arr2.splice(arr2.indexOf(item), 1)
    }
  }
}

function removeInternalDupes(arr) {
  let idx = 0;
  while (idx < arr.length) {
    let item = arr[idx];
    if (arr.indexOf(item, idx + 1) > 0) {
      arr.splice(arr.indexOf(item, idx + 1), 1);
    } else idx++;
  }
}



console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9])
console.log(union([1, 3, 3, 9, 5], [3, 6, 6, 9, 9]));
