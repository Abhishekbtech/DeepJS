
// JavaScript Function call()

// With the call() method, you can write a method that can be used on different objects.
// It can be used to invoke (call) a method with an owner object as an argument (parameter)

const person = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
const person1 = {
    firstName: "John",
    lastName: "Doe"
}
const person2 = {
    firstName: "Mary",
    lastName: "Doe"
}

// This will return "John Doe":
person.fullName.call(person1);


// The call() Method with Arguments

const person3 = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}

const person4 = {
    firstName: "John",
    lastName: "Doe"
}

person.fullName.call(person1, "Oslo", "Norway");