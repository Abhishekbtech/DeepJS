
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