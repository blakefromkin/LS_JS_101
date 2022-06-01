function strToNum(str) {
  let numArr = [];
  let negative = false;

  if (str.startsWith('-')) {
    negative = true;
  }

  for (let char of str) {
    if (char !== '-') {
    numArr.push(char * 1);
    }
  }

  let finalNum = 0;
  let multiplyer = 1;
  for (let i = numArr.length - 1; i > -1; i--) {
    finalNum = finalNum + (numArr[i] * multiplyer);
    multiplyer *= 10;
  }

  return negative === false ? finalNum : finalNum * -1;
}

console.log(strToNum("4321"));
console.log(strToNum("570"));
console.log(strToNum("-570"));

// ALTERNATIVELY, COULD USE AN OBJECT WITH ENTRIES LIKE 1:1, 2:2 to convert
