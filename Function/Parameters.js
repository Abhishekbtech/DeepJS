
// JavaScript Function Parameters

// A JavaScript function does not perform any checking on parameter values (arguments).


// Default Parameters

// If a function is called with missing arguments (less than declared), the missing values are set to undefined
// Sometimes this is acceptable, but sometimes it is better to assign a default value to the parameter

function myFunction(x, y) {
    if (y === undefined) {
        y = 2;
    }
}

// ES6 allows function parameters to have default values
function myFunction(x, y = 10) {
    return x + y;
}
myFunction(5);


// Function Rest Parameter

// The rest parameter (...) allows a function to treat an indefinite number of arguments as an array
function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);


// The Arguments Object

// JavaScript functions have a built-in object called the arguments object.
// The argument object contains an array of the arguments used when the function was called (invoked).
// This way you can simply use a function to find (for instance) the highest value in a list of numbers

x = sumAll(1, 123, 500, 115, 44, 88);

function sumAll() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

// If a function is called with too many arguments (more than declared), these arguments can be reached using the arguments object.



// Pass By Value :- the function is called by directly passing the value of the variable as an argument. So any changes made inside the function do not affect the original value.
function Passbyvalue(a, b) {
    let tmp;
    tmp = b;
    b = a;
    a = tmp;
    console.log(`Inside Pass by value function -> a = ${a} b = ${b}`);
}
let a = 1;
let b = 2;
console.log(`Before calling Pass by value Function -> a = ${a} b = ${b}`);
Passbyvalue(a, b);
console.log(`After calling Pass by value Function -> a = ${a} b = ${b}`);


// Pass by Reference :- Function is called by directly passing the reference/address of the variable as an argument. So changing the value inside the function also change the original value. In JavaScript array and Object follows pass by reference property.
function PassbyReference(obj) {
    let tmp = obj[0];
    obj[0] = obj[1];
    obj[1] = tmp;

    console.log(`Inside Pass By Reference Function -> a = ${obj[0]} b = ${obj[1]}`);
}

let obj = [10, 20]
console.log(`Before calling Pass By Reference Function -> a = ${obj[0]} b = ${obj[1]}`);
PassbyReference(obj)
console.log(`After calling Pass By Reference Function -> a = ${obj[0]} b = ${obj[1]}`);