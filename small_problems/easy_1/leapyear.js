function isLeapYear(year) {
  if (year > 1751) {
    if (year % 400 === 0) {
      return true;
    } else if (year % 100 === 0) {
      return false;
    } else {
      return year % 4 === 0;
    }
  } else {
    return year % 4 === 0 ? true : false;
  }
}

console.log(isLeapYear(2020));
