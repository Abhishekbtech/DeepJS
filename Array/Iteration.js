
// JavaScript Array Iteration

const numbers = [45, 4, 9, 16, 25];

// forEach() :-  method calls a function (a callback function) once for each array element
numbers.forEach(fun);
function fun(value, index, itself) {
    console.log("value ", value);
}