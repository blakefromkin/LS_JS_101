function shortLongShort(str1, str2) {
  let shorter = str1.length < str2.length ? str1 : str2;
  let longer = str1.length < str2.length ? str2 : str1;

  return shorter + longer + shorter;
}

let example = shortLongShort('lmao', 'lol');
console.log(example);
