// OPERATORS => based on true / false (boolean values)

// assignment operator :-
var x = 5; // x = 5 that means 5 is assign to x.
x += 10; //  means x = 5 + 10
console.log(x); // 15

var x = 15;
x -= 10; // x = 15 - 10
console.log(x);

var x = 15;
x *= 10; // x = 15 * 10
console.log(x);

var x = 15;
x /= 10; // x = 15 / 10
console.log(x);

var x = 15;
x **= 3; // x = 15 cube ( 15*15*15 )
console.log(x); // 3375

// comparision operators :- check left and right values
// == equal operator / loose operator => only check 'value', not 'data type''.
// === Identical operator / strict operator => check 'value' and 'data type' both.

var a = 5;
var b = 5;
console.log(a == b); //===>> true (values are same = 5)
console.log(a === b); //===>> true (data types are same = number)
// true because of primitive datatype (located in stack memomry)
console.log(a != b); // false check not equal same value
console.log(a !== b); // false check not equal same data type

////////////////////////////
var xobj = {
  name: "vikas",
};
var yobj = {
  name: "vikas",
};
console.log(xobj == yobj); // false because of refrence datatype
// (located in heap memory(diff location))
console.log(xobj === yobj); // false because of refrence datatype
// (located in heap memory (diff location))

var yobj = xobj; // both are same now(xobj and yobj) xobj assign in yobj
console.log(xobj == yobj); // true because of primitive datatype (located in heap (same location))
console.log(xobj === yobj); // true because of premitive datatype (located in heap (same location))

var a = 5;
var b = "5";
var result = a == b;
var result2 = a === b;
console.log(result); // ===>> true (values are same = 5)
console.log(result2); // ===>> false (data types are different = number and "string" )

var x = 5;
var result = x < 10; // smaller than
console.log(result);

var x = 5;
var result = x > 10; // greater than
console.log(result);

var x = 5;
var result = x <= 10; // smaller than equal to
console.log(result);

/* Logical operators :- 
 1. AND (&&) operator :- && operator check two conditions left and right ,and both conditions should be    true then only the result will come true.if not then it will give false.

                       left and right called operands.
                       
                       true && true = true
                       true && false = false
                       false && true = false
                       false && false = false  
                       */

var userobj = {
  username: "vikasdhyani",
  password: "vikas123",
  email: "vikas@gamil.com",
};

var username = "vikasdhyani";
var password = "vikas123";

var login = username === "vikasdhyani" && password === "vikas1234";
console.log(login);

var userobj = {
  username: "vikasdhyani",
  password: "vikas123",
  email: "vikas@gamil.com",
};

var username = "vikasdhyani";
var password = "vikas123";
if (username === "vikasdhyani" && password === "vikas123") {
  console.log("You are logged In");
} else {
  console.log("please try again");
}

/* 
2. OR (||) operator :- || operator check both conditions left and right, in this operator
                     any one condition should be true then it will give true. if the both condition
                     are false then it will give false.
                     true && true = true
                     true && false = true
                     false && true = true
                     false && false = false  
                     */
var username = "vikasdhyani";
var password = "vikas123";
if (username === "vikasdhyani" || password === "vikas1223") {
  console.log("You are logged In");
} else {
  console.log("please try again");
}

/*
3. NOT (!) operator :- it gives opposite of true and false.
                      true = false
                      false = true 
                      */
var x = true;
console.log(x); // true
x = !x; // opposite of x
console.log(x); // false

// Arithmatic operators:- + , - , * , / , % , ++ , -- , ** .

var x = 15;
x %= 10; // x = 15 % 10 remainder equal to
console.log(x); // 5

var x = 5;
x++; // output 5
console.log(x); //it will print first then increment. output 6
//console.log(x++); //it will print 5

var x = 5;
console.log(++x); // it will directly increment the value then print.
// SAME AS FOR DECREMENT (--) OPERATOR.

var x = 5;
var y = 3;
console.log(x ** y); // 125 (5*5*5)

// delete operator:
var userobj = {
  username: "vikasdhyani",
  password: "vikas123",
  email: "vikas@gamil.com",
};
delete userobj.password;
console.log(userobj); // { username: 'vikasdhyani', email: 'vikas@gamil.com' }

// in operator:- gives true or false (present or not)
var userobj = {
  username: "vikasdhyani",
  password: "vikas123",
  email: "vikas@gamil.com",
};
console.log("username" in userobj); // true

////////////////////////////////////////////////

// ternary operator
let age = 18;
let myage =
  age >= 18 ? "you are eligible for vote" : "you are not eligible for vote";
// age >= 18 (condition)
// ? true : false
console.log(myage);

let fruit = "apple";
let favfruit = fruit === "mango" ? "mujhe apple chahiye" : "mango bhi chalega";
console.log(favfruit);
