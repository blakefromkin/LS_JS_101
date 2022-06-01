let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

// Add up all the ages
let ageSum = Object.values(ages).reduce((a, b) => a + b);
console.log(ageSum);

// Pick out the minimum age from the object
let minAge = Object.values(ages).reduce((a, b) => Math.min(a, b));
console.log(minAge);
