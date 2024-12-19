
// Types of JavaScript Operators


// 1. Arithmetic Operators

// console.log(" 1. Arithmetic ")
// let a = 10, b = 5;
// console.log(a + b);   // addition
// console.log(a - b);   // subtration
// console.log(a * b);   // multiplication
// console.log(a / b);   // division
// console.log(a % b);   // Modules or Remainder
// console.log(a ** b);   // Exponentiation
// console.log(a++);   // post increment
// console.log(a--);   // post decrement
// console.log(++a);   // per increment
// console.log(--a);   // per decrement


// 2. Assignment Operators

// console.log(" 2. Assignment Operators ")
// let e = 10;         //Assignment
// e += 5;             //Add and assign    
// e -= 3;             //Subtract and assign
// e *= 4;             //Multiply and assign
// e /= 2;             //Divide and assign
// e %= 3;             //Modulus and assign
// e **= 2;            //Exponentiation and assign


// 3. Comparison Operators

//  console.log(" 3. Comparison ")
// let c = 10, d = 20;
// if (c == d) { console.log("Equal"); }   	          // Equal to
// else if (c != d) { console.log("Not equal"); }        // Not equal

// if (c > d) { console.log("Greater than"); }           // Greater
// if (c < d) { console.log("Less than"); }              // Less
// if (c >= d) { console.log("Greater or equal"); }      // Great then equal
// if (c <= d) { console.log("Less or equal") };         // less then equal

// console.log(c === d);                                 // Strict equal ( equal value and equal type )
// console.log(c !== d);                                 // Strict Not equal ( not equal value or not equal type )


// 4. Logical Operators

// console.log(" 4. Logical Operators ")
// let f = true, g = false;
// console.log(!f);           //Logical NOT
// console.log(f && g);       //Logical AND
// console.log(f || g);       //Logical OR


// 5. Bitwise Operators

// console.log(" 5. Bitwise ")
// let h = 60, i = 13;
// console.log(h & i);          //Bitwise AND
// console.log(h | i);          //Bitwise OR
// console.log(h ^ i);          //Bitwise XOR
// console.log(~h);             //Bitwise Not
// console.log(13 << 2);         //Left shift
// console.log(13 >> 2);         //Right Shift
// console.log(13 >>> 2);        //Zero fill right shift   unsigned right shift


// 6. Ternary Operators

// console.log("6. Ternary Operators")
// let j = 15;
// j > 10 ? console.log('Yes') : console.log('No');


// 7. Type Operators

// console.log(" 7. Type Operators ")
// console.log(typeof 42);                 // Use typeof for primitive types or when you need a quick, general check of the value's type.

// const arr = [];
// console.log(arr instanceof Array);      // Use instanceof to verify if an object is an instance of a particular class or constructor.


// 8. String Operators

// console.log(" 8. String Operators ")
// let text1 = "A";
// let text2 = "B";
// let result = text1 < text2;             // Note that strings are compared alphabetically
// let text3 = text1 + " " + text2;        

// let x = 5 + 5;
// let y = "5" + 5;
// let z = "Hello" + 5;                    // Adding two numbers, will return the sum, but adding a number and a string will return a string


// 9. Comma

// The comma operator , is one of the rarest and most unusual operators. Sometimes, it’s used to write shorter code, so we need to know it in order to understand what’s going on.
// The comma operator allows us to evaluate several expressions, dividing them with a comma ,. Each of them is evaluated but only the result of the last one is returned.

// let n = (1 + 2, 3 + 4);
// console.log(n)