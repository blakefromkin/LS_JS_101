let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

let tCount1 = Array.from(statement1).filter(ltr => ltr === 't').length;
let tCount2 = Array.from(statement2).filter(ltr => ltr === 't').length;

console.log(tCount1);
console.log(tCount2);
