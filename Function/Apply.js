
// JavaScript Function apply()

// With the apply() method, you can write a method that can be used on different objects.


const person = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const person1 = {
    firstName: "Mary",
    lastName: "Doe"
}

// This will return "Mary Doe":
person.fullName.apply(person1);


// The apply() Method with Arguments

const person3 = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}

const person4 = {
    firstName: "John",
    lastName: "Doe"
}

person.fullName.apply(person1, ["Oslo", "Norway"]);




//   The Difference Between call() and apply()
// The difference is:

// The call() method takes arguments separately.

// The apply() method takes arguments as an array.