function penultimate(str) {
  let strArr = str.split(' ');
  return strArr[strArr.length - 2];
}

console.log(penultimate("Hi, my name is Senor Kevin."));
