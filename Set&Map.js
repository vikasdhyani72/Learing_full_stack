// set :- set of any elements or sequence of data , no duplicate value
// new Set() := it gives unique set of value, no duplicate in object form
// set is predefine object or class in javascript.
let myNums = [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 6, 7, 7, 8, 8, 9];
let myUniqueSet = new Set(myNums);
console.log(myUniqueSet); // Set(9) { 1, 2, 3, 4, 5, 6, 7, 8, 9 }
///////////////////////////OR///////////////////////////////////
let arr = new Set([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 6, 7, 7, 8, 8, 9]);
console.log(arr); //output is = Set(9) { 1, 2, 3, 4, 5, 6, 7, 8, 9 }

// add element
arr.add(34);
arr.add(33);
arr.add(34);
arr.add(33);
// or
arr.add(34).add(33).add(34).add(33); // chaining method
console.log(arr); // Set(11) { 1, 2, 3, 4, 5, 6, 7, 8, 9, 34, 33 }

// delete element
arr.delete(6);
console.log(arr); // Set(10) { 1, 2, 3, 4, 5, 7, 8, 9, 34, 33 }

// isPresent or not, using has() method
console.log(arr.has(23)); // false
console.log(arr.has(9)); // true

// how to calculate the size of the set
console.log(arr.size); // 10 its a properety not methd()
console.log(arr.length); // undefined (not work with sets of array)

for (let item of arr) {
  console.log(item);
}

//######################### _Map_ ##########################

// Map:= is store to key value pair and keys are anything like numbers , array , object , boolean

let myobj = new Map();
myobj.set("name", "vikas");
myobj.set("age", 26);
myobj.set("profession", "developer");
myobj.set(1, "one");

console.log(myobj);

// all keys
console.log(myobj.keys()); // [Map Iterator] { 'name', 'age', 1, 'profession' }
//        or
for (let keys of myobj.keys()) {
  console.log(keys); // all keys print
}

// for of loop ( because it is iterable)
for (let keyValue of myobj) {
  console.log(keyValue);
}

// get
console.log(myobj.get(1)); // one

// deleting
myobj.delete("age");
console.log(myobj);

//clear all
myobj.clear();
console.log(myobj); // {} empty object
