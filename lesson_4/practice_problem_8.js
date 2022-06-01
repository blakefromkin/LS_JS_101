let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

// Write code that would create the following object from that^ array:
// { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

let obj = {};
flintstones.forEach((name, index) => {
  obj[name] = index;
})

console.log(obj);
