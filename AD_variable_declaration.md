#############################################################################################################

# Variables = is the place to store value.
var,let and const are the keywords to declare the varibles.
var is a function scope, and let and const are block scope.
var keyword is globally, or declare the same variable name in the code

If you use var outside of a function, it belongs to the global scope.

If you use var inside of a function, it belongs to that function.(function scope)

If you use var inside of a block, i.e. a for loop, the variable is still available outside of that block.

var has a function scope, not a block scope.
let has a block scope.

let is the block scoped version of var, and is limited to the block (or expression) where it is defined.

If you use let inside of a block, i.e. a for loop, the variable is only available inside of that loop.

let has a block scope.
const is a variable that once it has been created, its value can never change.

const has a block scope.
"It does not define a constant value. It defines a constant reference to a value.

Because of this you can NOT:

1. Reassign a constant value
2. Reassign a constant array
3. Reassign a constant object

But you CAN:

1. Change the elements of constant array
2. Change the properties of constant object"

var a = 5;
var a = 6;
a = 7;
console.log(a); // print 7 (recent value)

let, u can not declare the same varible name again but u can change the value.
let x = 10;
let x = 11; u can not do this again same variable use with let keyword
x = 11; u can reassign the value
console.log(x); // print 11 (has changed the value of x)

const, nor u can declare same variable name , neither u can ressign or change the value.
const c = 13;
//const c = 14 can not re declare the variable name
//c = 15 can not reassign or change the value
console.log(c);

var firstName = "vikas"; // "vikas" is value which is store or assigning to firstname variable.
var lastName = "dhyani";
var age = 26;
console.log(firstName, lastName, age);
// OR
var firstName = "vikas",
lastName = "dhyani",
age = 26;
console.log(firstName, lastName, age);

var y = "tom";
function name() {
var y = "jerry";
console.log(y); // jerry
}
name();
console.log(y); // tom

use var out of the function
function name() {
var y = "jerry";
console.log(y); // jerry
}
name();
console.log(y); // // but u can not use var let and const out of the function

with let and same with const
let y = "tom";
function name() {
let y = "jerry";
console.log(y); // jerry
}
name();
console.log(y); // tom
but u can not redeclare same variable (y) in same code
Identifier 'y' has already been declared
