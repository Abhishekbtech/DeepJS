
// JavaScript Functions

// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it).


// Function Syntax

// A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().
// Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
// The parentheses may include parameter names separated by commas:   (parameter1, parameter2, ...)
// The code to be executed, by the function, is placed inside curly brackets: {}

function name(parameter1, parameter2, parameter3) {
    // code to be executed
}


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