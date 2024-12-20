
// JavaScript String Search

let text = "Please locate where 'locate' occurs!";

// indexOf() :- The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:
console.log("indexof", text.indexOf("locate"));


// lastIndexOf() :- The lastIndexOf() method returns the index of the last occurrence of a specified text in a string, or it returns -1 if the string is not found:
console.log("lastindexof", text.lastIndexOf("locate"));


// search() :-  The search() method searches a string for a string (or a regular expression) and returns the position of the match:
console.log("search", text.search("locate"));


// When to Use Which?
// Use search() when you need pattern matching or want to work with regular expressions.
// Use indexOf() when you're simply looking for a specific substring and don't need the flexibility of regular expressions.


// match() :-   method returns an array containing the results of matching a string against a string (or a regular expression).
let text2 = "The rain in SPAIN stays mainly in the plain";
console.log("match", text2.match("ain"));


// matchAll() :- method returns an iterator containing the results of matching a string against a string (or a regular expression).
console.log("matchAll", text2.matchAll("ain"));


// When to Use Which?
// Use match() when:
        // You only need a quick list of matches (with g).
        // You care only about the first match.

//Use matchAll() when:
        // You need detailed match information (e.g., indices, capture groups).
        // You want to work with all matches, including their associated metadata.


// includes() :- method returns true if a string contains a specified value.
console.log("includes", text2.includes("SPAIN"));


// startsWith() :-  method returns true if a string begins with a specified value.
console.log("startswith", text2.startsWith("The"));


// endsWith() :-    method returns true if a string ends with a specified value.
console.log("endswith", text2.endsWith("plain"));