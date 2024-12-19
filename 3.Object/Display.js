
// JavaScript Display Objects


const person = {
    name: "John",
    age: 30,
    city: "New York"
};


// Displaying the Object Properties by name

let res = person.name + "," + person.age + "," + person.city;   // The properties of an object can be displayed as a string


// Displaying the Object Properties in a Loop

let text = "";                                                  // The properties of an object can be collected in a loop:
for (let x in person) {
    text += person[x] + " ";
};


// Displaying the Object using Object.values()

const myArray = Object.values(person);                          // creates an array from the property values:


// Displaying the Object using JSON.stringify()

let myString = JSON.stringify(person);                          // objects can be converted to a string with JSON method


// Using Object.entries()

let text1 = "";                                                 // makes it simple to use objects in loops
for (let [fruit, value] of Object.entries(fruits)) {
    text1 += fruit + ": " + value + "<br>";
}