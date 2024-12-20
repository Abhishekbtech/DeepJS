
// JavaScript Sorting Arrays

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const fruit = ["Apple", "Orange", "Apple", "Mango"];
const fru = [40, 100, 1, 5, 25, 10];
const numbers = [45, 4, 9, 16, 25];

// sort() :-    method sorts an array alphabetically it's change in original array
// console.log("sort() ", fru.sort());


// reverse() :- sort an array in descending order it's change in original array
// console.log("reverse() ", fru.reverse());


// toSorted() :-    method as a safe way to sort an array without altering the original array
// const sorted = fru.toSorted();
// console.log("toSorted() ", sorted);


// toReversed() :-  method as a safe way to reverse an array without altering the original array
// const reversed = sorted.toReversed();
// console.log("toReversed() ", reversed);


// Sorting Object :- 
const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
];
console.log("Sorting Object number", cars.sort(function(a, b){return a.year - b.year}))        // by on year
console.log("Sorting Object string", cars.sort(function(a, b){
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
}))


// Numeric Sort :- it's changer into orginal array
const points = [40, 100, 1, 5, 25, 10];
console.log("Numeric sort ", points.sort((a, b) => a - b));
console.log("Numeric reversed ", points.sort((a, b) => b - a));


// Random Order :- Using a sort function, like explained above, you can sort an numeric array in random order
console.log("random sort", points.sort(function(){return 0.5 - Math.random()}))


// Math.max() 
console.log("max", Math.max(...points))


// Math.min()
console.log("min", Math.min(...points))