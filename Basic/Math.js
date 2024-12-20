
// JavaScript Math Object

Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E



// Number to Integer

Math.round(x)	// Returns x rounded to its nearest integer
Math.ceil(x)	// Returns x rounded up to its nearest integer
Math.floor(x)	// Returns x rounded down to its nearest integer
Math.trunc(x)	// Returns the integer part of x (new in ES6)


// Math.pow(x, y) returns the value of x to the power of y
console.log("pow", Math.pow(8, 2))


// Math.sqrt(x) returns the square root of x
console.log("sqrt", Math.sqrt(9))


// Math.abs(x) returns the absolute (positive) value of x
console.log("abs", Math.abs(-5))


// Math.sin(x) returns the sine (a value between -1 and 1) of the angle x (given in radians).
console.log("sin", Math.sin(Math.PI / 2))


// Math.cos(x) returns the cosine (a value between -1 and 1) of the angle x (given in radians).
console.log("cos", Math.cos(Math.PI / 2))


// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)
console.log("random", Math.random())


// Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments
console.log("min", Math.min(1, 2, 3, 4))
console.log("max", Math.max(1, 2, 3, 4))


// Math.log(x) returns the natural logarithm of x.
console.log("log", Math.log(10))


// Math.log2(x) returns the base 2 logarithm of x
console.log("log2", Math.log2(10))


// Math.log10(x) returns the base 10 logarithm of x
console.log("log10", Math.log10(10))






abs(x)	                        // Returns the absolute value of x
acos(x)	                        // Returns the arccosine of x, in radians
acosh(x)	                    // Returns the hyperbolic arccosine of x
asin(x)	                        // Returns the arcsine of x, in radians
asinh(x)	                    // Returns the hyperbolic arcsine of x
atan(x)	                        // Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
atan2(y, x)	                    // Returns the arctangent of the quotient of its arguments
atanh(x)	                    // Returns the hyperbolic arctangent of x
cbrt(x)	                        // Returns the cubic root of x
ceil(x)	                        // Returns x, rounded upwards to the nearest integer
cos(x)	                        // Returns the cosine of x (x is in radians)
cosh(x)	                        // Returns the hyperbolic cosine of x
exp(x)	                        // Returns the value of Ex
floor(x)	                    // Returns x, rounded downwards to the nearest integer
log(x)	                        // Returns the natural logarithm (base E) of x
max(x, y, z, ... n)	        // Returns the number with the highest value
min(x, y, z, ... n)	        // Returns the number with the lowest value
pow(x, y)	                    // Returns the value of x to the power of y
random()	                    // Returns a random number between 0 and 1
round(x)	                    // Rounds x to the nearest integer
sign(x)	                        // Returns if x is negative, null or positive (-1, 0, 1)
sin(x)	                        // Returns the sine of x (x is in radians)
sinh(x)	                        // Returns the hyperbolic sine of x
sqrt(x)	                        // Returns the square root of x
tan(x)	                        // Returns the tangent of an angle
tanh(x)	                        // Returns the hyperbolic tangent of a number
trunc(x)	                    // Returns the integer part of a number (x)