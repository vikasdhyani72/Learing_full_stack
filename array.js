/*
Arrays are a fundamental data structure in JavaScript that allows you to store and organize collections of data. Whether you're dealing with a list of numbers, strings, or more complex objects, arrays provide a convenient way to manage and manipulate your data.

Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value.

In JS, an array is denoted by square brackets [ ]

It can hold elements of different data types, such as numbers, strings, or even other lists.
Arrays are mutable, which means you can modify them by adding, removing, or changing elements.
            0      1      2      - index numbers
         ["red","Green","Blue"]  - the array
*/

// array data type ==> store different types of multiple values.
// index = is the position of elements in the array, which starts with 0 .
// length = how many element are in the array.

var namearray = ["vikas", "tom", "jerry", 26, true, undefined, null, "oggy"];
console.log(namearray);

var namesCopy = Array.from(namearray);
console.log(namesCopy); // copy of namesArray

//                OR (ArrayConstructor)
var names = new Array("vikas", "tom", "jerry", 26, true, "oggy");
console.log(names); // new way to write an array
console.log(names[4], typeof names[4]); // print single value and datatype of that value
console.log(typeof names[3]); // number
console.log(names.indexOf(26)); // 3

let namearray = new Array(); // declare a empty array
// assigning the values
namearray[0] = "vikas";
namearray[1] = "tom";
namearray[2] = "jerry";
namearray[3] = 25;
namearray[4] = true;
namearray[6] = "oggy";
console.log(namearray);
//output [ 'vikas', 'tom', 'jerry', 25, true, <1 empty item>, 'oggy' ]
// data type of array ==> object
console.log(typeof names);

////////////////////////////////////////////
let myArray = [4, 5, 3, 1, 6, 7, 9, 0, 2, 8];
console.log(myArray.length); // ====>> how many element in the array
myArray.sort(); //====>> assending order
console.log(myArray);

// arrays methods :-
let arr = [124, 343, 334, 23, 563, 46, 344, 390, 445, 433, 654, 554];
for (let i = 0; i < arr.length; i = i + 2) console.log(arr[i]); // ek chord ke ek element print karwana

let arr2 = [124, 343, 334, 23, 563, 46, 344, 390, 445, 433, 654, 554];
arr2.forEach(function (elem) {
  console.log(elem * 2);
}); // har ek element ko 2 se multiply karwana

// 1. push():- add new elements at the end of array
let array = ["mango", "banana", "grapes", "orange", "kiwi", "pomegranade"];
array.push("lychi", "lemon");
console.log(array);

// 2. pop():- remove last element from the array and return it.
let array1 = ["mango", "banana", "grapes", "orange", "kiwi", "pomegranade"];
let res = array1.pop();
console.log(res);
console.log(array1);

// 3. toString():- return a string representation of the array.(convert into string of an array)
let array2 = ["mango", "banana", "grapes", "orange", "kiwi", "pomegranade"];
let res2 = array2.toString();
console.log(res2);
console.log(typeof res2);

// 4. join():- also return a string but a seperator
let array3 = ["mango", "banana", "grapes", "orange", "kiwi", "pomegranade"];
let res3 = array3.join("~"); // ~ is seperator, we can costomise
console.log(res3);
console.log(typeof res3); // string

// 5. shift():- remove first element and return it.
let array4 = ["mango", "banana", "grapes", "orange", "kiwi", "pomegranade"];
let res4 = array4.shift();
console.log(res4);
console.log(array4);

// 6. unshift():- add new element and return the new length of array
let array5 = ["mango", "banana", "grapes", "orange", "kiwi", "pomegranade"];
let res5 = array5.unshift("lychi");
console.log(res5); // output 7 (return new length of array)
console.log(array5);

// 7. slice():- return a piece of slice from the array
let array6 = ["mango", "banana", "grapes", "orange", "kiwi", "pomegranade"];
let res6 = array6.slice(1, 4); // 1 is index where to start, and 4 is index of array but 4 will not include
console.log(res6); // return only 1,2,3 indexes

// 8. splice():- remove , replace, and add element from the array
// remove:-
let array7 = ["mango", "banana", "grapes", "orange", "kiwi", "pomegranade"];
let res7 = array7.splice(1, 4); // 1 is index where to start and 4 is index before 4 index it will print.
console.warn(res7); // return removed value

// add :-
let array8 = ["mango", "banana", "grapes", "orange", "kiwi", "pomegranade"];
let res8 = array8.splice(2, 1, "lychi", "lemon"); // 2 is index where from replce and 1 is count how many
// element delete
console.log(array8); // create new array

let fruits = ["Banana", "Orange", "Apple", "Mango"];

// Remove "Orange" from the array
fruits.splice(1, 1);

console.log(fruits); // Output: ["Banana", "Apple", "Mango"]

// Add "Lemon" and "Kiwi" at index 2, and remove 0 elements
fruits.splice(2, 0, "Lemon", "Kiwi");

console.log(fruits); // Output: ["Banana", "Apple", "Lemon", "Kiwi", "Mango"]

/* 
9.forEach():- The forEach method executes a provided function once for each array element.
Unlike map, filter, and reduce, forEach doesn't return anything; it simply executes the provided
function for each element.
It's primarily used for its side effects, such as logging, updating variables, 
or interacting with the DOM. */
//Syntax: array.forEach(callbackFunction(currentValue, index, array));

let arr10 = [124, 343, 334, 23, 563, 46, 344, 390, 445, 433, 654, 554];
arr10.forEach(function (elem) {
  console.log(elem * 2); // every element multiply by 2
});

let objInsideArray = [
  {
    languageName: "javascript",
    fileName: "js",
  },
  {
    languageName: "python",
    fileName: "py",
  },
  {
    languageName: "java",
    fileName: "java",
  },
];
objInsideArray.forEach((item) => {
  console.log(item.languageName);
});
// forEach does not return a value,

/* 
10.map() 
The map method creates a new array by applying a function to each element of the original array.
It doesn't modify the original array; instead, it returns a new array with the results of applying
the provided function to each element. */
//Syntax: array.map(callbackFunction(currentValue, index, array));

let arr11 = [124, 343, 334, 23, 563, 46, 344, 390, 445, 433, 654, 554];
let res11 = arr11.map(function (value, index, array) {
  return value + 2;
  //return index + 4;        // choose any return
  //return array[7] * 2;
});
console.log(res11);

/* 
11.reduce() The reduce method applies a function against an accumulator and each element in the array
(from left to right) to reduce it to a single value. 
It iterates over each element of the array, accumulating a single result. */
/* Syntax: array.reduce(
  callbackFunction(accumulator(prevValue), currentValue, index, array),
  initialValue
); */

let arr12 = [124, 343, 334, 23, 563, 46, 344, 390, 445, 433, 654, 554];
let res12 = arr12.reduce(function (prevValue, currentValue) {
  return prevValue + currentValue;
}, 0);
console.log(res12);

/*
12. filter() The filter method creates a new array with all elements 
that pass the test implemented by the provided function.
It doesn't modify the original array; instead, it returns a new array with only
the elements that satisfy the condition.  */
//Syntax: array.filter(callbackFunction(currentValue, index, array))

let arr13 = [124, 343, 334, 23, 563, 46, 344, 390, 445, 433, 654, 554];
let res13 = arr13.filter(function (currentValue, index, array) {
  return currentValue > 400;
});
console.log(res13);
// return always boolean value

// swap
let numarr = [34, 54];
[numarr[0], numarr[1]] = [numarr[1], numarr[0]];
console.log(numarr);

let numarray = [1, 2, 3, 4, 5, 6, 7];
let [a, b, c] = numarray; // array destructring
console.log(a, b, c); // output 1 2 3

// spread operator
let numarray1 = [1, 2, 3, 4, 5, 6, 7];
let [x, y, ...z] = numarray1; // array destructring with spread operator
console.log(x, y, z); // output 1 2 [ 3, 4, 5, 6, 7 ]   z is array now

let number1 = [1, 2, 3, 4, 5, 6];
let number2 = [11, 22, 33, 44, 55];
let result = [...number1, ...number2];
console.log(result);

// array sort (ascending order)
let arr14 = [124, 343, 334, 23, 563, 46, 344, 390, 445, 33, 654, 554];
arr14.sort((num1, num2) => {
  return num1 - num2;
});
console.log(arr14);

// (descending order)
let arr15 = [124, 343, 334, 23, 563, 46, 344, 390, 445, 33, 654, 554];
arr15.sort((num1, num2) => {
  return num2 - num1;
});
console.log(arr15);

// find method
let animArray = ["lion", "cat", "dog", "camel", "deeer"];
let isThere = animArray.find((element) => {
  return element.length === 5;
});
console.log(isThere); // camel ( length of camel is 5)

//findIndex
let animArray1 = ["lion", "cat", "dog", "camel", "deeer"];
let isThere1 = animArray1.findIndex((element) => {
  return element.length === 5;
});
console.log(isThere1);//3

// every method
let arr16 = [124, 343, 334, 23, 563, 46, 344, 390, 445, 433, 654, 554];
let isEvenOrOdd = arr16.every((element) => {
  return element % 2 === 0;
});
console.log(isEvenOrOdd); // false

// array destructuring : Array destructuring in JavaScript is a convenient way to extract multiple values from an array and assign them to variables in a single statement. It's particularly useful when you have an array and you want to access its elements without using array indexes.
const numbers = [1, 2, 3, 4, 5];

// Using array destructuring
const [first, second, third] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(third); // Output: 3
// In this example, first, second, and third variables are assigned the values from the numbers array at their respective positions.

// chaining methods
let arrnums = [124, 343, 334, 23, 563, 46, 344, 390, 445, 433, 654, 554];
const values = arrnums
  .map((nums) => nums + 10)
  .map((nums) => nums * 10)
  .filter((nums) => nums <= 400);
console.log(values);
// if we use curly brackets then we have to write return keyword
// it is automatically return the value.
