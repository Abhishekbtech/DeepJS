
// Object Constructor Functions

// Sometimes we need to create many objects of the same type.
// To create an object type we use an object constructor function.

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;        
}

// In the constructor function, this has no value.
// The value of this will become the new object when a new object is created.


// Now we can use new Person() to create many new Person objects

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");
const mySelf = new Person("Johnny", "Rally", 22, "green");

console.log(myFather)


// Adding a Property to a Constructor

// To add a new property, you must add it to the constructor function prototype
Person.prototype.nationality = "English"    // A value given to a property will be a default value for all objects created by the constructor


// Adding a Method to a Constructor

Person.prototype.changeName = function (name) {
    this.lastName = name;
}


console.log("After update", myFather.nationality)

console.log(Object.getPrototypeOf(myFather));