
// JavaScript / jQuery DOM Selectors


// jQuery vs JavaScript

// jQuery was created in 2006 by John Resig. It was designed to handle Browser Incompatibilities and to simplify HTML DOM Manipulation, Event Handling, Animations, and Ajax.
// For more than 10 years, jQuery has been the most popular JavaScript library in the world.
// However, after JavaScript Version 5 (2009), most of the jQuery utilities can be solved with a few lines of standard JavaScript:


// Finding HTML Element by Id

// jQuery
myElement = $("#id01");

// js
myElement = document.getElementById("id01");


// Finding HTML Elements by Tag Name

// jQuery
myElements = $("p");

// js
myElements = document.getElementsByTagName("p");


// Finding HTML Elements by Class Name

// jQuery
myElements = $(".intro")

// js
myElements = document.getElementsByClassName("intro");


// Finding HTML Elements by CSS Selectors

// jQuery
myElements = $("p.intro");

// js
myElements = document.querySelectorAll("p.intro");