// Creates a random age for Teddy between 20 and 120

function displayTeddysAge() {
  let age = Math.floor(Math.random() * 101) + 20;
  console.log(`Teddy is ${age} years old!`);
}

displayTeddysAge();
