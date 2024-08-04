// Type conversion :- the process of converting a value from one data type to another.

var result = "vikas" + "dhyani"; // concatination
console.log(result);

result = 5 + 10; // reassign
console.log(result);

result = "5" + "10";
console.log(result);

// Implicit type conversion :- In JS refers to the automatic conversion of a value from one
//                             data type to another .
var result;
var result = "10" + 2;
console.log(result); // 102
console.log("10" + true); // 10true
console.log("10" + undefined); // 10undefined
console.log("10" + null); // 10null
console.log("10" + ""); // 10

console.log("10" - "2"); // 8 (because of type conversion, convert string into number)
console.log("10" - 2); // 8
console.log("10" * 2); // 20
console.log("10" / 2); // 5

console.log("hello" - "world"); // NaN (not a number)
console.log(10 - "hello"); // NaN

console.log("10" - true); // 9 ( "10" convert into 10 & true convert into 1 )
console.log(10 + true); // 11
console.log(10 + false); // 10 (false = 0)
console.log(10 + null); // 10 (null = 0)
console.log(10 - null); // 10

console.log(10 + undefined); // NaN (implicit cannot convert undefined into number)
console.log("10" + undefined); // 10undefined (concatination)
console.log(10 - undefined); // NaN
console.log("10" - undefined); // NaN
console.log(true + undefined); // NaN
console.log(null + undefined); // NaN

// Explicit type conversion :-  In Js for conversion of a value from one data type to another using various
//                               methods and operators, which are globally available.

// 1. Number() : converts a value to a number.

var num = Number("10");
console.log(num); // 10
console.log(typeof num);

var num2 = Number(true);
console.log(num2); // 1
console.log(typeof num2);

var num3 = Number(undefined);
console.log(num3); // NaN
console.log(typeof num3); // number

var num4 = Number(null);
console.log(num4); // 0
console.log(typeof num4);

// 2. String() :- converts a value to a string.

var str = String(42);
console.log(str); // "42"
console.log(typeof str); // string

// 3. Boolean() :- converts a value to a boolean

var bool = Boolean(1);
console.log(bool); // true

var bool1 = Boolean("true");
console.log(bool1); // true ( any string value converts into boolean)

var bool2 = Boolean("");
console.log(bool2); // false ( empty string)

var bool3 = Boolean(" ");
console.log(bool3); // true (here is gap between string)

// 4. parseInt() :- converts a string to an integer and float to an integer.

var num = parseInt("10")
console.log(num); // 10

var num1 = parseInt("10.2")
console.log(num1); // 10

var num2 = parseInt(10.2)
console.log(num2); // 10

var num3 = parseInt("abc")
console.log(num3); // NaN

var num4 = parseInt("10abc")
console.log(num4); // 10


// 5. parseFloat :- it converts into an float number.