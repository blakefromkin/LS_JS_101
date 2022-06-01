let rlSync = require('readline-sync');
let bill = Number(rlSync.question('What is the bill? '));
let tip = Number(rlSync.question('What is the tip percentage? ')) / 100 * bill;

console.log(`The tip is $${tip}`);
console.log(`The total is $${tip + bill}`);
