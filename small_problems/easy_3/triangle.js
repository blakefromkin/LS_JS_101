function displayRightTriangle(length) {
  for (let height = 1; height <= length; height++) {
    console.log(' '.repeat(length - height) + '*'.repeat(height));
  }
}

displayRightTriangle(6);
