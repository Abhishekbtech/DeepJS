
// JavaScript Object Methods

// JavaScript Object Methods can be grouped into:

// General Methods
// Property Management Methods
// Object Protection Methods


// General Methods

// Copies properties from a source object to a target object
// Object.assign(target, source)

// Creates an object from an existing object
// Object.create(object)

// Returns an array of the key/value pairs of an object
// Object.entries(object)

// Creates an object from a list of keys/values
// Object.fromEntries()

// Returns an array of the keys of an object
// Object.keys(object)

// Returns an array of the property values of an object
// Object.values(object)

// Groups object elements according to a function
// Object.groupBy(object, callback)



// The Object.assign() method copies properties from one or more source objects to a target object.
const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

// Create Source Object
const person2 = { firstName: "Anne", lastName: "Smith" };

// Assign Source to Target
console.log("Object.assign", Object.assign(person1, person2))


// Object.entries() returns an array of the key/value pairs in an object
console.log("Object.entries", Object.entries(person1))


// The fromEntries() method creates an object from a list of key/value pairs.
const fruits = [
    ["apples", 300],
    ["pears", 900],
    ["bananas", 500]
];
console.log("Object.fromEntries", Object.fromEntries(fruits))


// Object.values() is similar to Object.entries(), but returns a single dimension array of the object values.
console.log("Object.values", Object.values(person1))


// The Object.keys() method returns an array with the keys of an object
console.log("Object.keys", Object.keys(person1))


// The Object.groupBy() method groups elements of an object according to string values returned from a callback function
// const fruits1 = [
//     { name: "apples", quantity: 300 },
//     { name: "bananas", quantity: 500 },
//     { name: "oranges", quantity: 200 },
//     { name: "kiwi", quantity: 150 }
// ];

// // Callback function to Group Elements
// function myCallback({ quantity }) {
//     return quantity > 200 ? "ok" : "low";
// }

// // Group by Quantity
// console.log("Object.groupBy",Object.groupBy(fruits1, myCallback))       // not Supported


// JavaScript for...in Loop
// The for...in loop is used to loop through the properties of an object.
// for (let variable in object) {
//     // code to be executed
//   }

  for (let x in person1) {
    console.log(person1[x])
  }