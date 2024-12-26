
// JavaScript Object Prototypes

// All JavaScript objects inherit properties and methods from a prototype


// Prototype Inheritance

// All JavaScript objects inherit properties and methods from a prototype:

// Date objects inherit from Date.prototype
// Array objects inherit from Array.prototype
// Person objects inherit from Person.prototype
// The Object.prototype is on the top of the prototype inheritance chain:

// Date objects, Array objects, and Person objects inherit from Object.prototype


// Adding Properties and Methods to Objects

// Sometimes you want to add new properties (or methods) to all existing objects of a given type.
// Sometimes you want to add new properties (or methods) to an object constructor.


function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}

const myFather = new Person("John", "Doe", 50, "blue");

// We also learned that you can not add a new property to an existing object constructor:
Person.nationality = "English";

// Using the prototype Property
Person.prototype.nationality = "English";

// The JavaScript prototype property also allows you to add new methods to objects constructors
Person.prototype.name = function () {
    return this.firstName + " " + this.lastName;
};


console.log("person", Person)
console.log("MyFather", myFather.name())
