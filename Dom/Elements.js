
// JavaScript HTML DOM Elements

// This page teaches you how to find and access HTML elements in an HTML page


// Finding HTML Elements



// Finding HTML elements by id
const element = document.getElementById("intro");

// Finding HTML elements by tag name
const element1 = document.getElementsByTagName("p");

// Finding HTML elements by class name
const x = document.getElementsByClassName("intro");

// Finding HTML elements by CSS selectors
const x1 = document.querySelectorAll("p.intro");

// Finding HTML elements by HTML object collections
const x2 = document.forms["frm1"];
let text = "";
for (let i = 0; i < x.length; i++) {
  text += x.elements[i].value + "<br>";
}
document.getElementById("demo").innerHTML = text;