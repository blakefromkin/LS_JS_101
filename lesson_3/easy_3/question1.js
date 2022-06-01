// Three different ways to remove all elements

let numbers = [1, 2, 3, 4];
numbers.length = 0;
console.log(numbers);

let numbers2 = [1, 2, 3, 4];
while (numbers2.length) {
  numbers2.pop();
}
console.log(numbers2);

let numbers3 = [1, 2, 3, 4];
numbers3 = numbers3.filter(num => num > 5);
console.log(numbers3);
