
// JavaScript Sets

// A JavaScript Set is a collection of unique values.
// Each value can only occur once in a Set.
// The values can be of any type, primitive values or objects.


const letter = new Set(["a","b","c"]);


// How to Create a Set

// Passing an array to new Set()
// Create an empty set and use add() to add values

const letters = new Set();
letters.add("a");
letters.add("b");
letters.add("c");


// Listing the Elements

// You can list all Set elements (values) with a for..of loop
let text = "";
for (const x of letters) {
  text = x;
  console.log("ee", text)
}


// Sets are Objects

console.log("type of", typeof(letters))
console.log("instance",letters instanceof Set)


// The has() Method

// The has() method returns true if a specified value exists in a set
console.log("has()", letters.has("d"))


// The values() Method

// The values() method returns an Iterator object with the values in a Set:
console.log("values()", letters.values())


// The keys() Method

// The keys() method returns an Iterator object with the values in a Set
console.log("keys()", letters.keys())


// The entries() Method

// The entries() method returns an Iterator object with key/value pairs in a Set
console.log("entries()", letters.entries())

// The entries() method is supposed to return a [key,value] pair from an object.
// A Set has no keys, so the entries() method returns [value,value].