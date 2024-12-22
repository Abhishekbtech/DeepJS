
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


  