
// JavaScript / jQuery HTML Elements


// Set Text Content

// Set the inner text of an HTML element
// jQuery
myElement.text("Hello Sweden!")

// js
myElement.textContent = "Hello Sweden!";


// Get Text Content

// Get the inner text of an HTML element
// jQuery
myText = $("#02").text();

// JS
myText = document.getElementById("02").textContent;


// Set HTML Content

// Set the HTML content of an element:
// jQuery
myElement.html("<p>Hello World</p>");

// js
myElement.innerHTML = "<p>Hello World</p>";


// Get HTML Content
// jQuery
myElement.html();

// js
myElement.innerHTML;