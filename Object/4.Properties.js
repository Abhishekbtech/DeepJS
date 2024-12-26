
// JavaScript Object Properties


// Property Management Methods

// Adding or changing an object property
// Object.defineProperty(object, property, descriptor)

// Adding or changing object properties
// Object.defineProperties(object, descriptors)

// Accessing a Property
// Object.getOwnPropertyDescriptor(object, property)

// Accessing Properties
// Object.getOwnPropertyDescriptors(object)

// Returns all properties as an array
// Object.getOwnPropertyNames(object)

// Accessing the prototype
// Object.getPrototypeOf(object)


// The Object.defineProperty() method can be used to:

// Adding a new property to an object
// Changing property values
// Changing property metadata
// Changing object getters and setters

const person = {
    firstName: "John",
    lastName: "Doe",
    language: "EN"
};
console.log("original", person)
// Add a Property
Object.defineProperty(person, "year", { value: "2008" });
console.log("after def", person.year)


// Changing Meta Data

// writable : true      // Property value can be changed
// enumerable : true    // Property can be enumerated
// configurable : true  // Property can be reconfigured

Object.defineProperty(person, "language", { writable: false });
console.log("after def", person.language)
// Changing Property Value
person.language = "ES";
console.log("after change", person.language)


// The Object.getOwnPropertyNames() method can: List object properties

console.log("Object.getOwnPropertyNames()", Object.getOwnPropertyNames(person))

// Object.getOwnPropertyNames() will also list properties that is not enumerable

Object.defineProperty(person, "language", { enumerable: false });
console.log("Object.getOwnPropertyNames() after enumerable", Object.getOwnPropertyNames(person))












let obj = {
    name: "Abhishek Chauhan",
    class: 10,
    age: 20
}


const descriptorOfName = Object.getOwnPropertyDescriptor(obj, "name");
console.log(descriptorOfName, "orginal property descriptoe");


// 1. writable
descriptorOfName.writable = false; // making it non-writeable
console.log("After changing writability of 'name' to false : ", descriptorOfName)

// or

Object.defineProperty(obj, "name", {
    writable: false,
});
console.log("After changing writability of 'name' to false : ", Object.getOwnPropertyDescriptor(obj, "name"));

obj.name = "Abhi";
console.log(obj);


// 2. enumerable:-  if true, then listed in loops, otherwise not listed. we can't see the that  property in for...in loop but we can see in for...of loop.
Object.defineProperty(obj, "name", {
    enumerable: false,
});

for (let key in obj) {
    console.log(key, "enum");
}


// 3. configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.
Object.defineProperty(obj, "name", {
    configurable: false,
});
delete obj.name;
console.log(obj, "after the delete");

console.log(Object.getOwnPropertyDescriptor(obj, "name"));

// or

Object.seal(obj)
console.log(Object.getOwnPropertyDescriptor(obj, "name"));


// 4. Object.freeze(obj) :-     Forbids adding/removing/changing of properties. Sets configurable: false, writable: false for all existing properties.
Object.freeze(obj);
console.log(Object.getOwnPropertyDescriptor(obj, "name"));


// 5. Object.isFrozen(obj) :-   Returns true if adding/removing/changing properties is forbidden, and all current properties are configurable: false, writable: false.
console.log(Object.isFrozen(obj));


// 6. Object.isSealed(obj) :-   Returns true if adding/removing properties is forbidden, and all existing properties have configurable: false.
console.log(Object.isSealed(obj));


// 7. Object.freeze(obj) :- Forbids adding/removing/changing of properties. Sets configurable: false, writable: false for all existing properties.
Object.freeze(obj)
console.log(Object.getOwnPropertyDescriptor(obj, "name"));


// 8. Object.preventExtensions(obj) :-  Forbids the addition of new properties to the object.
const object1 = {};
Object.preventExtensions(object1);
try {
    Object.defineProperty(object1, 'property1', {
        value: 42,
    });
} catch (e) {
    console.log(e);
    // Expected output: TypeError: Cannot define property property1, object is not extensible
}