
// JavaScript Class Inheritance


// Class Inheritance

// Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.
// To create a class inheritance, use the extends keyword.
// A class created with a class inheritance inherits all the methods from another class

// class Car {
//     constructor(brand) {
//         this.carname = brand;
//     }
//     present() {
//         return 'I have a ' + this.carname;
//     }
// }

// class Model extends Car {
//     constructor(brand, mod) {
//         super(brand);
//         this.model = mod;
//     }
//     show() {
//         return this.present() + ', it is a ' + this.model;
//     }
// }

// let myCar = new Model("Ford", "Mustang");
// console.log(myCar.show()); // Output: I have a Ford, it is a Mustang


// The super() method refers to the parent class.
// By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.



// Getters and Setters

// Classes also allows you to use getters and setters.
// It can be smart to use getters and setters for your properties, especially if you want to do something special with the value before returning them, or before you set them.
// To add getters and setters in the class, use the get and set keywords.

class Car {
    constructor(brand) {
        this.carname = brand;
    }
    get cnam() {
        return this.carname;
    }
    set cnam(x) {
        this.carname = x;
    }
}

const myCar1 = new Car("Ford");
myCar.carn = "Volvo";
console.log(myCar1.cnam); // Output: Ford