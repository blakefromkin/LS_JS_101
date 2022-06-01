function indentStack(string, height) {
  for (let row = 0; row < height; row++) {
    console.log(' '.repeat(row) + string);
  }
}

indentStack('The Flintstones rock!', 10);
