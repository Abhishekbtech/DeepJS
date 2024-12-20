
// JavaScript Set Date Methods

const d = new Date();

// setFullYear() method sets the year of a date object. In this example to 2020  /  method can optionally set month and day
console.log("setfullyear",d.setFullYear(2020))


// setMonth() method sets the month of a date object (0-11)
console.log("setMonth",d.setMonth(2))


// setDate() method sets the day of a date object (1-31)
console.log("setDate",d.setDate(15))


// setHours() method sets the hours of a date object (0-23)
console.log("setHours",d.setHours(10))


// setMinutes() method sets the minutes of a date object (0-59)
console.log("setMinutes",d.setMinutes(30))


// setSeconds() method sets the seconds of a date object (0-59)
console.log("setSeconds",d.setSeconds(45))


// Compare Dates

let text = "";
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
  text = "Today is before January 14, 2100.";
} else {
  text = "Today is after January 14, 2100.";
}