
// JavaScript Array Search

const fruit = ["Apple", "Orange", "Apple", "Mango"];

// indexOf() :-    method searches an array for an element value and returns its position.
console.log("indexOf() ", fruit.indexOf("Apple"));


// lastIndexOf() :-     is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element
console.log("lastindexof() ", fruit.lastIndexOf("Apple"));


// includes() :-     This allows us to check if an element is present in an array (including NaN, unlike indexOf). it's give boolean value
console.log("includes() ", fruit.includes("Mango"));


// find() :-    method returns the value of the first array element that passes a test function
console.log("find() ", fruit.find((value) => { return value === 'Apple' }));


// findIndex() :-   method returns the index of the first array element that passes a test function.
console.log("findIndex() ", fruit.findIndex((value) => { return value === "Apple" }));


// findLast() :-    method that will start from the end of an array and return the value of the first element that satisfies a condition.
console.log("findLast() ", fruit.findLast((value) => { return value === 'Apple' }));


// findLastIndex() :-   method finds the index of the last element that satisfies a condition.
console.log("findIndex() ", fruit.findLastIndex((value) => {return value === "Apple"}));
