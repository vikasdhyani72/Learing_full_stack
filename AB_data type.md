# Primitive datatype :-

_In js, primitive datatype are the basic datatypes that are not objects and do not have methods. they are the fundamental builing blocks of data in JS._

There are 7 types of primitive datatypes in js.
mainly five

1.  Number (integer - 3,-4,-5,542,424) and float(4.5 , 6.77, etc)
2.  String ("hello",'hello',`hello`)
3.  Boolean (true(1), false(0))
4.  Null (empty value)
5.  Undefined (undefined) = variable is declared but not assign any value is called undefined.

6.  Symbol() = unique
7.  BigInt (1234567890123456789n)

**primitive datatypes are immutable, means their values can not be changed once they are created.**

_Reference datatype / non primitive :- function , object , arrays_

## In JavaScript, data types are broadly categorized into two types: primitive data types and reference data types. Understanding the difference between these two types is crucial for working effectively with JavaScript.

# Primitive Data Types

Primitive data types are the most basic data types in JavaScript. They are immutable, meaning their values cannot be changed. When you manipulate a primitive value, you are working with the actual value stored in memory.

Examples of Primitive Data Types:

1. _Number: Represents both integer and floating-point numbers._
   `let num = 42;`
   `let Pi = 3.14;`

2._String: Represents a sequence of characters._
`let greeting = "Hello, world!";`

3. _Boolean: Represents a logical value, either true or false._
   `let isActive = true;`

4. _Undefined: Represents a variable that has been declared but not assigned a value._
   `let uninitialized;                                                              `
   `console.log(uninitialized);` // Output: undefined

5. _Null: Represents the intentional absence of any object value._
   `let emptyValue = null;`

6. _Symbol: Represents a unique and immutable identifier._
   `let sym = Symbol('unique');`

7. _BigInt: Represents whole numbers larger than Number.MAX_SAFE_INTEGER._
   `let bigNumber = BigInt(12345678901234567890);`

# Reference Data Types

Reference data types, on the other hand, are objects. Unlike primitive types, reference types are mutable and can have their properties and values changed. When you manipulate a reference value, you are working with a reference (or pointer) to the value stored in memory, not the actual value itself.

Examples of Reference Data Types:

_Object: Represents a collection of properties._

`let person = {                                `
`  name: "John",                               `
`  age: 30                                     `
` };`

_Array: Represents an ordered collection of values._
`let numbers = [1, 2, 3, 4, 5];`

_Function: Represents a block of code designed to perform a particular task._
`function greet() {                              `
`console.log("Hello!");                          `
`}                                               `
_Date: Represents a single moment in time._
`let now = new Date();`

_RegExp: Represents a regular expression._
`let regex = /hello/;`

_Map: Represents a collection of keyed data items, similar to an object but with various differences._
`let map = new Map();                             `
`map.set('key', 'value');`

_Set: Represents a collection of unique values._
`let set = new Set([1, 2, 3]);`

# Key Differences

Storage:
_Primitive: Stored directly in the variable. Reference: Stored as a reference (address) in the variable._

Immutability:
_Primitive: Immutable (cannot be changed) Reference: Mutable (can be changed)._

Copying:

1. _Primitive: Copying a primitive value creates a new value._
   let a = 10;
   let b = a; // b is a copy of a
   a = 20;
   console.log(b); // Output: 10

2. _Reference: Copying a reference value copies the reference, not the object itself._
   let obj1 = { name: "John" };
   let obj2 = obj1; // obj2 is a reference to obj1
   obj1.name = "Doe";
   console.log(obj2.name); // Output: Doe

Comparison:
Primitive: Compared by value.
let x = 5;
let y = 5;
console.log(x === y); // Output: true

Reference: Compared by reference (i.e., whether they point to the same object).
let obj1 = { name: "John" };
let obj2 = { name: "John" };
`console.log(obj1 === obj2);` // Output: false (different references)
let obj3 = obj1;
`console.log(obj1 === obj3);` // Output: true (same reference)
