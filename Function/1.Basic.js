
// JavaScript Functions

// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it).


// Function Syntax

// A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().
// Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
// The parentheses may include parameter names separated by commas:   (parameter1, parameter2, ...)
// The code to be executed, by the function, is placed inside curly brackets: {}

// Function Declarations

function name(parameter1, parameter2, parameter3) {
    // code to be executed
}

// Function Expressions

const x1 = function (a, b) { return a * b };

// Function Return

// When JavaScript reaches a return statement, the function will stop executing.
// If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.
// Functions often compute a return value. The return value is "returned" back to the "caller"

// Function is called, the return value will end up in x
let x = myFunction(4, 3);
function myFunction(a, b) {
    // Function returns the product of a and b
    return a * b;
}


// The Function() Constructor

// avaScript functions are defined with the function keyword.
// Functions can also be defined with a built-in JavaScript function constructor called Function()

const myFunction = new Function("a", "b", "return a * b");
let x2 = myFunction(4, 3);

// You actually don't have to use the function constructor. The example above is the same as writing

const myFunction = function (a, b) { return a * b };
let x3 = myFunction(4, 3);


// Function Hoisting

// Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.
// Hoisting applies to variable declarations and to function declarations.
// Because of this, JavaScript functions can be called before they are declared

myFunction(5);
function myFunction(y) {
    return y * y;
}


// Self-Invoking Functions

// Function expressions can be made "self-invoking".
// A self-invoking expression is invoked (started) automatically, without being called.
// Function expressions will execute automatically if the expression is followed by ().
// You cannot self-invoke a function declaration.
// You have to add parentheses around the function to indicate that it is a function expression

(function () {
    let x = "Hello!!";  // I will invoke myself
})();


// Functions are Objects

// The typeof operator in JavaScript returns "function" for functions.
// But, JavaScript functions can best be described as objects.
// JavaScript functions have both properties and methods.
// The arguments.length property returns the number of arguments received when the function was invoked

function myFunction(a, b) {
    return arguments.length;
}


// The toString() method returns the function as a string

console.log("toString", myFunction.toString())


// A function defined as the property of an object, is called a method to the object.
// A function designed to create new objects, is called an object constructor.


// Arrow Functions

// Arrow functions allows a short syntax for writing function expressions.
// You don't need the function keyword, the return keyword, and the curly brackets

const x4 = (x, y) => x * y;

// Arrow functions do not have their own this. They are not well suited for defining object methods.
// Arrow functions are not hoisted. They must be defined before they are used.
// Using const is safer than using var, because a function expression is always constant value.
// You can only omit the return keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them

const x5 = (x, y) => { return x * y };