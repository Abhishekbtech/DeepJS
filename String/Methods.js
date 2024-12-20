
// JavaScript String Methods

// Javascript strings are primitive and immutable: All string methods produce a new string without altering the original string


let str = "Abhishek Chauhan";


// length :- The length property returns the length of a string
console.log("length", str.length);


// charAt() :-  The charAt() method returns the character at a specified index (position) in a string
console.log("charat", str.charAt(3));


// charCodeAt() :-  The charCodeAt() method returns the code of the character at a specified index in a string
console.log("charCodeAt", str.charCodeAt(0));


// [ ] :-   Now you can use myString.at(-2) instead of charAt(myString.length-2).
console.log("[ ] or at( )", str[1], str.at(1));


// at() :- is an ES2022 feature
console.log("[ ] or at( )", str[1], str.at(1));


// slice() :-   extracts a part of a string and returns the extracted part in a new string. 
// The method takes 2 parameters: start position, and end position (end not included).
// If a parameter is negative, the position is counted from the end of the string
// str.slice(start [, end])
console.log("slice", str.slice(1, 6));


// substring() :-   substring() is similar to slice(). The difference is that start and end values less than 0 are treated as 0 in substring().
//If a negative value is passed, it is treated as 0.
// str.substring(start [, end])
console.log("substring", str.substring(1, 6));


// substr() :-  substr() is similar to slice(). The difference is that the second parameter specifies the length of the extracted part.
// str.substr(start [, length])
console.log("substr", str.substr(1, 6));



// NO NEED TO REMBER JUST FOR KNOWLEDGE


// toUpperCase() :- A string is converted to upper case with toUpperCase():
console.log("toUpperCase", str.toUpperCase());


// toLowerCase() :- A string is converted to lower case with toLowerCase():
console.log("toLowerCase", str.toLowerCase());


// concat() :-  joins two or more strings: we can use +
var x = "Hello ";
var y = "World!";
console.log("concat", x.concat(y));


// trim() :- method removes whitespace from both sides of a string:
let text1 = "      Hello World!      ";
console.log("trim", text1.trim());


// trimStart() :- The trimStart() method works like trim(), but removes whitespace only from the start of a string.
console.log("trimStart", text1.trimStart());


// trimEnd() :- The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
console.log("trimEnd", text1.trimEnd());


// padStart() :- The padStart() method pads a string from the start. It pads a string with another string (multiple times) until it reaches a given length.
console.log("padStart", 'abc'.padStart(8, '0'));


// padEnd() :- method pads a string from the end.
console.log("padEnd", 'abc'.padEnd(4, 'x'));


// repeat() :- method returns a string with a number of copies of a string.
console.log('repeat', 'hello'.repeat(3));


// replace() :- method replaces a specified value with another value in a string, method replaces only the first match
console.log("replace", str.replace("Abhishek", "Abhi"));


// ReplaceAll() :- method allows you to specify a regular expression instead of a string to be replaced
let str1 = "Abhishek kya hal Abhishek or kya ho Abhishek "
console.log("replaceAll", str.replaceAll("Abhishek", "Abhi"));


// split() :- A string can be converted to an array with the split() method
console.log("split", str.split(","));