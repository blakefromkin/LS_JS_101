// Example code to analyze

let greeting = 'Hello';

while (true) {
  greeting = 'Hi';
  break;
}

console.log(greeting);

/*
My analysis:
On line 3, we declare the global variable 'greeting' and assign it the value 'Hello', a string
Then, we run a while(true) loop on line 5, which continues to run until it hits a break statement.
In this case, the loop runs once, reassigns 'greeting' to 'Hi' on line 6, and breaks on line 7.
Finally, on line 10, console.log() is called with greeting as its argument. As greeting has been reassigned, this code now logs 'Hi' to the console.

This example demonstrates variable scoping rules in JavaScript; specifically the fact that a variable declared in the outer scope is accessible from a nested inner scope.
*/

// Another Example
let hello = "Hello, world!";
function myFunc() {
  console.log(hello);
}

myFunc();

/*
My analysis:
On line 23, the global variable hello is declared and assigned a string, "Hello, world!"
Then, on line 24, the function myFunc is declared. The function has no parameters.
myFunc itself invokes another function, console.log(), which takes hello as its argument on line 25. So, when myFunc() is invoked on line 28, "Hello, world!" will be logged to the console.
The function's return value isn't specified, and is therefore undefined. 

This example demonstrates variable scoping rules in Javascript; specifically that global variables are accessible from a nested inner scope.

*/
