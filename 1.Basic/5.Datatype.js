
// JavaScript has 8 Datatypes


// 1 Number

let num = 25;
console.log(typeof num);            // numbers of any kind: integer or floating-point, integers are limited by ±(253-1)


// 2 String

let name = "Abhi";
console.log(typeof name);           // A string may have zero or more characters, there’s no separate single-character type.


// 3 Boolean

let follow = true;
console.log(typeof follow);


// 4 undefined

let a;
console.log(typeof a);              // undefined for unassigned values – a standalone type that has a single value undefined.


// 5 null

let b = null;
console.log(typeof b);              // null for unknown values – a standalone type that has a single value null.


// 6 BigInt

let ac = BigInt(123);
console.log(typeof ac, ac);         // bigint for integer numbers of arbitrary length.


// 7 Symbal

let ab = Symbol(123);
console.log(typeof ab, ab);         // symbol for unique identifiers.


// 8 Object 

const person = {firstName:"John", lastName:"Doe"};          // Object
const cars = ["Saab", "Volvo", "BMW"];                      // Array object
const date = new Date("2022-03-25");                        // Date object

// Built-in object types can be:   objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more.