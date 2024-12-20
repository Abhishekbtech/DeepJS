
// JavaScript Get Date Methods

const d = new Date();

// getFullYear() method returns the year of a date as a four digit number
console.log("get full year",d.getFullYear());


// getMonth() method returns the month of a date as a number (0-11)
console.log("get month",d.getMonth());


// getDate() method returns the day of a date as a number (1-31)
console.log("get date",d.getDate());


// getHours() method returns the hours of a date as a number (0-23)
console.log("get hours",d.getHours());


// getMinutes() method returns the minutes of a date as a number (0-59)
console.log("get minutes",d.getMinutes());


// getSeconds() method returns the seconds of a date as a number (0-59)
console.log("get seconds",d.getSeconds());


// getMilliseconds() method returns the milliseconds of a date as a number (0-999)
console.log("get milliseconds",d.getMilliseconds());


// getDay() method returns the weekday of a date as a number (0-6)
console.log("get day",d.getDay());


// getTime() method returns the number of milliseconds since January 1, 1970
console.log("get time",d.getTime());


// Date.now() returns the number of milliseconds since January 1, 1970.
console.log("Date.now()",Date.now());


// getTimezoneOffset() method returns the difference (in minutes) between local time an UTC time
console.log("getTimezoneOffset()",d.getTimezoneOffset());