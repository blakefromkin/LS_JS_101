function getCentury(year) {
  let century = year % 100 === 0 ? String((year / 100) + 1) :
    String(Math.ceil(year / 100));
  let last = century[century.length - 1];

  if (century[century.length - 2] === '1'
    || last === '0' || last > 3) {
    return century + 'th';
  } else if (last === '1') {
    return century + 'st';
  } else if (last === '2') {
    return century + 'nd';
  } else {
    return century + 'rd';
  }
}

console.log(getCentury(1050));
console.log(getCentury(2000));
console.log(getCentury(1999));
console.log(getCentury(5));
console.log(getCentury(5296));
console.log(getCentury(2111));
