
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




// Local variables
// A variable declared inside a function is only visible inside that function.

// function showMessage() {
//     let message = "Hello, I'm JavaScript!"; // local variable
//     console.log(message);
// }
// showMessage(); // Hello, I'm JavaScript!
// console.log(message);


// Outer variables
// A function can access an outer variable as well

// let userName = 'John';
// function showMessage() {
//   userName = "Bob"; // (1) changed the outer variable
//   let message = 'Hello, ' + userName;
//   console.log(message);
// }
// console.log( userName ); // John before the function call
// showMessage();
// console.log( userName ); // Bob, the value was modified by the function


// Function with varibales
// let c = 10;
// function funcWithVar(a, b) {
//     return a * c + b * c;
// }
// console.log("Function With Varibales ", funcWithVar(4, 2))


// Function with default Value
// function funwith(name, age = 24) {
//     return `My name is ${name} and i am ${age} old `;
// }
// console.log("Function With default vale ", funwith('John'))
// console.log("Function With default vale ", funwith('John', 25))


// Rest operator(...)
// function fun(...input) {
//     let sum = 0;
//     for (let i of input) {
//         sum += i;
//     }
//     return sum;
// }
// console.log("Rest operator ", fun(1, 2));
// console.log("Rest operator ", fun(1, 2, 3));
// console.log("Rest operator ", fun(1, 2, 3, 4, 5));



// Pure Functions :- A pure function is a function that always returns the same output when given the same input, and it does not have any side effects
// function geek(value) {
//     return value + 100;
// }
// console.log("Pure Functions ", geek(34));

// // Impure Functions:- Impure functions are functions that can modify the state of the application or have side effects.
// function incrementflag(flag) {
//     flag++;
//     return flag;
// }
// console.log("Impure Functions ", incrementflag(1));


// Higher-Order Function :- A function that receives another function as an argument or that returns a new function or both is called Higher-order function. Higher-order functions are only possible because of the First-class function.
// const greet =  function(name){
//     return function(m){
//       console.log(`Hi!! ${name}, ${m}`);
//     }
// }

// const greet_message = greet('ABC');


// callback function :-  is a function passed into another function as an argument same as above
// let value = 1;

// const abhi = doSomething(() => {
//   value = 2;
// });

// console.log(value);


// Callback function, passed as a parameter in the higher order function
// function callbackFunction() {
//     console.log('I am  a callback function');
// }

// // higher order function
// function higherOrderFunction(fun) {
//     console.log('I am higher order function')
//     return fun();
// }

// higherOrderFunction(callbackFunction);
