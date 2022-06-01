function findDup(arr) {
  let idx = 0;
  while (idx < arr.length) {
    if (arr.includes(arr[idx], idx + 1)) {
      return arr[idx];
    } else idx++;
  }
  return undefined;
}

findDup([1, 5, 3, 1]);
