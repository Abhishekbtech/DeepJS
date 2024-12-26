
// JavaScript Object Definition


// Methods for Defining JavaScript Objects

// Using an Object Literal
// Using the new Keyword
// Using an Object Constructor
// Using Object.assign()
// Using Object.create()
// Using Object.fromEntries()


// An object literal is a list of property names:values inside curly braces {}
const ob1 = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };

// Create an empty JavaScript object using new Object(), and add 4 properties
// Create an Object
const person = new Object();

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

// To create an object type we use an object constructor function.
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
const myFather = new Person("John", "Doe", 50, "blue");