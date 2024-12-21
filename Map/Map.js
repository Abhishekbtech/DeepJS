
// JavaScript Maps

// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.

const fruit = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);


// How to Create a Map

// Passing an Array to new Map()
// Create a Map and use Map.set()
const fruits = new Map();
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);


// The get() Method

console.log("get()",fruits.get("apples"));


// Map.size
// The size property returns the number of elements in a map
console.log("size",fruits.size);


// Map.delete()
// The delete() method removes a map element
console.log("delete", fruits.delete("apples"))


// Map.clear()
// The clear() method removes all the elements from a map
// console.log("clear", fruits.clear())


// Map.has()
// The has() method returns true if a key exists in a map
console.log("has()", fruits.has("apples"))


// Map.forEach()
// The forEach() method invokes a callback for each key/value pair in a map
let text = "";
fruits.forEach (function(value, key) {
  text = key + ' = ' + value;
  console.log(text)
})


// Map.entries()
// The entries() method returns an iterator object with the [key,values] in a map
console.log("entries()", fruits.entries())


// Map.keys()
// The keys() method returns an iterator object with the keys in a map
console.log("keys()", fruits.keys())


// JavaScript Map.groupBy()
// ES2024 added the Map.groupBy() method to JavaScript.
// The Map.groupBy() method groups elements of an object according to string values returned from a callback function.
// The Map.groupBy() method does not change the original object.

// console.log("group", Map.groupBy(fruits, fru => fru[0]))


// Map.values()
// The values() method returns an iterator object with the values in a map
console.log("values()", fruits.values())


// Maps are Objects

console.log("type of", typeof fruits)
console.log("instance", fruits instanceof Map)




// JavaScript Objects vs Maps

//      Object	                                                Map
//      Not directly iterable	                                Directly iterable
//      Do not have a size property	                            Have a size property
//      Keys must be Strings (or Symbols)	                    Keys can be any datatype
//      Keys are not well ordered	                            Keys are ordered by insertion
//      Have default keys	                                    Do not have default keys