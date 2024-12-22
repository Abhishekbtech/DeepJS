
// JavaScript Hoisting

// Hoisting is JavaScript's default behavior of moving declarations to the top.


// Use let and const: Prefer let and const over var to avoid unintended behavior due to hoisting.
// Declare functions and variables at the top: This improves code readability and avoids confusion.
// Understand the temporal dead zone: When using let and const, be mindful of the temporal dead zone to prevent ReferenceError.



// Key Points of Hoisting

// Variable Declarations:

// Variable declarations using var are hoisted, but their initialization is not. The variable will be undefined until it is initialized.
// Variables declared with let and const are also hoisted, but they are placed in a "temporal dead zone" from the start of the block until the declaration is encountered. Accessing them before the declaration results in a ReferenceError.

// Function Declarations:

// Function declarations are fully hoisted, meaning you can call the function even before its declaration in the code.

// Function Expressions:

// Function expressions (including those assigned to var, let, or const) are not fully hoisted. The variable is hoisted, but it remains undefined until the assignment is made.


console.log(x); // undefined
var x = 5;
console.log(x); // 5



console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;


sayHello(); // "Hello!"
function sayHello() {
  console.log("Hello!");
}


console.log(sayGoodbye); // undefined
sayGoodbye(); // TypeError: sayGoodbye is not a function
var sayGoodbye = function () {
  console.log("Goodbye!");
};