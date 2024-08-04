var name = "vikas";
var age = 26;
var ismarried = false;
console.log(name, age, ismarried);

// object data type { : "" , }  javascript is a object based languge,
//                              and in javascript almost everything is an object or
//                              act like an object.
var persondetail = {
  name: "vikas",
  age: 26,
  ismarried: false,
};
console.log(persondetail);

// print single value
console.log(persondetail.name);
console.log(persondetail.age);
console.log(persondetail.ismarried);
//             OR
console.log(persondetail["name"]);
console.log(persondetail["age"]);
console.log(persondetail["ismarried"]);

// another way to creatig object (objectConstructor)
let myobj = new Object(); // declare a empty object
// assigning values
myobj.name = "vikas";
myobj.address = "india";
console.log(myobj);

////////////////////////////////////////////////

// merge object with same keys
var persondetail = {
  name: "vikas",
  age: 26,
  ismarried: false,
};
var persondetail1 = {
  name: "tom",
  age: 23,
  ismarried: true,
};
let result1 = { ...persondetail, ...persondetail1 };
console.log(result1); // output is { name: 'tom', age: 23, ismarried: true } recent one

// merge object with different keys
var personobj = {
  name: "vikas",
  age: 26,
  ismarried: false,
};
var personobj1 = {
  addr: "india",
  haveCar: "no",
};
let result = { ...personobj, ...personobj1 };
console.log(result);

////////////////////#############//////////////////////
/* nested object:- 
In JavaScript, a nested object refers to an object that is a value within another object. It's like having an object inside another object. This is commonly used to organize and structure data hierarchically. Here's an example of a nested object:  */
// Creating a nested object
let person = {
  name: "John",
  age: 30,
  address: {
    street: "balasaur",
    city: "kotdwara",
    country: "India",
  },
};
// Accessing properties of the nested object
console.log(person.name); // Output: John
console.log(person.address.street); // Output: balasaur

// Modifying a property of the nested object
person.address.city = "dehradun";
console.log(person.address.city); // Output: dehradun

// Adding a new property to the nested object
person.address.postalCode = "246149";
console.log(person.address); /* Output: {
  street: 'balasaur',
  city: 'dehradun',
  country: 'India',
  postalCode: '246149'
}
*/

//////////////////////////////////////////////////
// object methods
/*
1.Object.keys(): Returns an array of a given object's own enumerable property names. */
const obj = {
  a: 1,
  b: 2,
  c: 3,
};
console.log(Object.keys(obj)); // Output: ["a", "b", "c"]

//2.Object.values(): Returns an array of a given object's own enumerable property values.
const obj1 = {
  a: 1,
  b: 2,
  c: 3,
};
console.log(Object.values(obj1)); // Output: [1, 2, 3]

//3.Object.entries(): Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
const obj2 = { a: 1, b: 2, c: 3 };
console.log(Object.entries(obj2)); // Output: [["a", 1], ["b", 2], ["c", 3]]

//4.Object.assign(): Copies the values of all enumerable own properties from one or more source objects to a target object.
const obj3 = { a: 1 };
const obj4 = { b: 2 };
const mergedObj = Object.assign({}, obj3, obj4);
console.log(mergedObj); // Output: { a: 1, b: 2 }

//5.Object.hasOwnProperty(): Returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).
const obj5 = { 
  a: 1, 
  b: 2 
};
console.log(obj5.hasOwnProperty("a")); // Output: true
console.log(obj5.hasOwnProperty("toString")); // Output: false

//6.Object.freeze(): Freezes an object: other code can't delete or change any properties.
const obj6 = { 
   a: 1,
   b: 2
   };
Object.freeze(obj6);
obj6.a = 5;
console.log(obj6.a); // Output: 1 (Value remains unchanged)

//7.Object.seal(): Prevents new properties from being added to an object and marks all existing properties as non-configurable.
const obj7 = { 
  a: 1, 
  b: 2 
};
Object.seal(obj7);
obj.c = 3;
console.log(obj7); // Output: { a: 1, b: 2 } (Property 'c' isn't added)


// object return
let fname = "vikas";
let lname = "dhyani";
let course = "wev dev";
function detail(fname, lname, course) {
  let fullName = fname + " " + lname;
  return { fullName, course };
}
let res = detail(fname, lname, course);
console.log(res.fullName);