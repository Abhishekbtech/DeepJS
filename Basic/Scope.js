
// JavaScript Scope

// JavaScript variables have 3 types of scope:
// Block scope
// Function scope
// Global scope


// Block Scope

// Before ES6 (2015), JavaScript variables had only Global Scope and Function Scope.
// ES6 introduced two important new JavaScript keywords: let and const.
// These two keywords provide Block Scope in JavaScript.
// Variables declared inside a { } block cannot be accessed from outside the block

{
  let x = 2;
}
// x can NOT be used here


// Local Scope
// Variables declared within a JavaScript function, are LOCAL to the function

function myFunction() {
  let carName = "Volvo";
}

// code here can NOT use carName
// Local variables have Function Scope


// Function Scope

// JavaScript has function scope: Each function creates a new scope.
// Variables defined inside a function are not accessible (visible) from outside the function.
// Variables declared with var, let and const are quite similar when declared inside a function.

function myFunction() {
  var carName = "Volvo";   // Function Scope
}


// Global Scope

// Variables declared Globally (outside any function) have Global Scope.
// Global variables can be accessed from anywhere in a JavaScript program.
// Variables declared with var, let and const are quite similar when declared outside a block


// Automatically Global

// If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.
// This code example will declare a global variable carName, even if the value is assigned inside a function

myFunction();

function myFunction() {
  carName = "Volvo";
}

console.log("c", carName)