
// JavaScript Strings

// Strings are for storing text
// Strings are written with quotes
// Strings created with single or double quotes work the same. There is no difference between the two.
// You can use quotes inside a string, as long as they don't match the quotes surrounding the string

let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';

console.log(answer1)
console.log(answer2)
console.log(answer3)


// Template Strings

// Templates were introduced with ES6 (JavaScript 2016).
// Templates are strings enclosed in backticks (`This is a template string`).
// Templates allow single and double quotes inside a string

let text = `He's often called "Johnny"`;
console.log(text)


/*
    There are other, less common special characters:
    Character	    Description
    \n	            New line
    \r	            In Windows text files a combination of two characters \r\n represents a new break, while on non-Windows OS it’s just \n. That’s for historical reasons, most Windows software also understands \n.
    \', \", \`	    Quotes
    \\	            Backslash
    \t	            Tab, 	Horizontal Tabulator
    \b, \f, \v	    Backspace, Form Feed, Vertical Tab – mentioned for completeness, coming from old times, not used nowadays (you can forget them right now).
*/

// The 6 escape characters above were originally designed to control typewriters, teletypes, and fax machines. They do not make any sense in HTML.


// JavaScript Strings as Objects

// Normally, JavaScript strings are primitive values, created from literals:
let x = "John";
// But strings can also be defined as objects with the keyword new
let y = new String("John");

// The new keyword complicates the code and slows down execution speed
// When using the == operator, x and y are equal
// When using the === operator, x and y are not equal
// Comparing two JavaScript objects always returns false