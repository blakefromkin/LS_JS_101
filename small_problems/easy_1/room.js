
const SQMETERS_TO_SQFEET = 10.7639;

let rlSync = require('readline-sync');
let length = rlSync.question('Enter room length in meters: ');
let width = rlSync.question('Enter room width in meters: ');

console.log(`The area of the room is ${length * width} square meters (${length * width *  SQMETERS_TO_SQFEET})`);
