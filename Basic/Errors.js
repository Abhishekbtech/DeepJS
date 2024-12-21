
// JavaScript Errors

// The try statement defines a code block to run (to try).
// The catch statement defines a code block to handle any error.
// The finally statement defines a code block to run regardless of the result.
// The throw statement defines a custom error.


try {
    // Block of code to try
}
catch (err) {
    // Block of code to handle errors
}
finally {
    // Block of code to be executed regardless of the try / catch result
}


function validateAge(age) {
    if (age < 18) {
        throw new Error("Age must be at least 18.");
    }
    return "Age is valid.";
}

try {
    console.log(validateAge(16));
} catch (error) {
    console.error(error.message); // Output: Age must be at least 18.
}