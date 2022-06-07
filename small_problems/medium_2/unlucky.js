/*
PROBLEM
Some people believe that Fridays that fall on the 13th day of the month are unlucky days. Write a function that takes a year as an argument and returns the number of Friday the 13ths in that year. You may assume that the year is greater than 1752, which is when the United Kingdom adopted the modern Gregorian Calendar. You may also assume that the same calendar will remain in use for the foreseeable future.

INPUT: year (num)
OUTPUT: num

EXPLICIT:
  - You can assume year > 1752

ALGORITHM
  - Create an array of months
  - Create an empty days array
  - Fill that array with every day of that year
    - for every month in months
      - for 1 to 31 times
        - Push `${months[0] ${idx}, ${year}}` to the days array

  - Filter the days array
    - For every month in months
    -   Return true if Date(day) includes `Fri ${month.substring(0, 3)} 13`

  - Return the length of days
*/

function fridayThe13ths(year) {
  let dates = [];
  for (let cnt = 0; cnt <= 11; cnt++) {
    dates.push(new Date(year, cnt, 13));
  }

  dates = dates.filter(date => date.getDay() === 5);
  return dates.length;
}

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2
