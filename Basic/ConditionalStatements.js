


// if statement to specify a block of JavaScript code to be executed if a condition is true
if (condition) {
    //  block of code to be executed if the condition is true
}


// else statement to specify a block of code to be executed if the condition is false
if (condition) {
    //  block of code to be executed if the condition is true
} else {
    //  block of code to be executed if the condition is false
}


// else if statement to specify a new condition if the first condition is false
if (condition1) {
    //  block of code to be executed if condition1 is true
} else if (condition2) {
    //  block of code to be executed if the condition1 is false and condition2 is true
} else {
    //  block of code to be executed if the condition1 is false and condition2 is false
}


// switch statement to select one of many code blocks to be executed
switch (expression) {
    case x:
        // code block
        break;
    case y:
        // code block
        break;
    default:
    // code block
}


// Multiple ‘?’ 
let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
    (age < 18) ? 'Hello!' :
        (age < 100) ? 'Greetings!' :
            'What an unusual age!';

alert(message);


// Non-traditional use of ‘?’ 

let company = prompt('Which company created JavaScript?', '');

(company == 'Netscape') ? alert('Right!') : alert('Wrong.');