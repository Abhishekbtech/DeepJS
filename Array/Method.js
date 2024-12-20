
// JavaScript Array Methods

const fruits = ["Banana", "Orange", "Apple", "Mango"];

// length :-    The length property returns the length (size) of an array
console.log("Length: ", fruits.length); 


// toString() :-    converts an array to a string of (comma separated) array values
console.log("toString(): ", fruits.toString());


// join() :- The join() method also joins all array elements into a string It behaves just like toString(), but in addition you can specify the separator:
console.log("join(): ", fruits.join('*'));


// at()/[] :-    method returns an indexed element from an array.   The at() method returns the same as [].
console.log("at() ", fruits.at(2));
console.log("[ ]", fruits[2]);


// pop() :-     method removes the last element from an array
console.log("pop() ", fruits.pop());


// push() :-    method adds a new element to an array (at the end) but it's print length of array
console.log("push() ", fruits.push("Kiwi"));


// shift() :-   method removes the first array element and "shifts" all other elements to a lower index 
console.log("shift() ", fruits.shift());


// unshift() :- method adds a new element to an array (at the beginning), and "unshifts" older elements but it's print length of array
console.log("unshift() ", fruits.unshift("Strawberry"));


// delete() :-  leaves undefined holes in the array
console.log("delete ",delete fruits[1]);


// concat() :-  method creates a new array by merging (concatenating) existing arrays. method can also take strings as arguments
let abhi = ["Banana", "Orange", "Apple", "Mango"];
let vegetables = ["Carrot", "Tomato", "Cucumber"];
console.log("concat() ", abhi.concat(vegetables));


// copyWithin() :- method copies array elements to another position in an array
console.log("copywithin", fruits.copyWithin(2, 0))                 // Copy to index 2, all elements from index 0
console.log("copywithin", fruits.copyWithin(2, 0, 2))              // Copy to index 2, the elements from index 0 to 2


// flat() :-  method creates a new array with sub-array elements concatenated to a specified depth
const myArr = [[1,2],[3,4],[5,6]];
console.log("flat",myArr.flat());


// splice() :-  method can be used to add new items to an array it's use for delete  also
// arr.splice(start[, deleteCount, elem1, ..., elemN])
// console.log("splice for adding",fruits.splice(2, 0, "Lemon", "Kiwi"))          // to add new element 
// console.log("splice for deleteing", fruits.splice(0, 1))                       // to deleteing 


// toSpliced() :- method as a safe way to splice an array without altering the original array



// NOTE :- the new toSpliced() method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array


// slice() :-   method slices out a piece of an array into a new array
console.log("slice() ", abhi.slice(1, 3));