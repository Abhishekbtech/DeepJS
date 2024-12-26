
// JavaScript Object Protection

// Object Protection Methods

// Prevents adding object properties
// Object.preventExtensions(object)

// Returns true if properties can be added to an object
// Object.isExtensible(object)

// Prevents adding and deleting object properties
// Object.seal(object)

// Returns true if object is sealed
// Object.isSealed(object)

// Prevents any changes to an object
// Object.freeze(object)

// Returns true if object is frozen
// Object.isFrozen(object)


const person = {firstName:"John", lastName:"Doe"};


// Object.preventExtensions() used to make an object non-extensible, which means new properties cannot be added to it
// Object.preventExtensions(person);


// Object.isExtensible() returns true if an object is extensible
console.log(Object.isExtensible(person)); // false


// Object.seal() method prevents additions or deletions of new properties.but it allows modification of existing properties as long as they are writable.  makes existing properties non-configurable.
Object.seal(person)

// The Object.isSealed() method can be used to check if an object is sealed.
console.log(Object.isSealed(person)); // true


// Object.freeze() is a method in JavaScript that freezes an object, making it immutable. Once an object is frozen, you cannot add, remove, or modify its properties.
Object.freeze(person)

// Object.isFrozen() method can be used to check if an object is frozen
console.log(Object.isFrozen(person)); // true