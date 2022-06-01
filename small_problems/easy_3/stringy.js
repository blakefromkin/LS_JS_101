function stringy(num) {
  let string = '';

  for (let index = 0; index < num; index++) {
    if (index % 2 === 0) {
      string += '1';
    } else {
      string += '0';
    }
  }
  return string;
}

console.log(stringy(20));
