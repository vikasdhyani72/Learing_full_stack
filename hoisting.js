/* Hoisting :- In javascript variable and function declaration are moved to the top of their 
               containing scope during the compilation phase.
               hoisting is the default behavior in javascript
          */

/* Features :- Declaration are hoisted, intilizations not hoisted.,
               allow calling functions before their declarations.    
              it does not work with 'variables' but work with 'function declaration' accept 
              function expression, and arrow function
              */

var x; // variable declaration
x = 5; // assign value to the variable
console.log(x); // 5

console.log(x); // undefined
var x; // javascript hoist only declaration not its value or initialization after execution.
x = 5;

x = 5;
console.log(x); // 5
var x; // not readable

// normal function can be hoist
test();
function test() {
  console.log("vikas");
}

//  this function expression can not hoist
test();
var test = function () {
  console.log("vikas");
};

// arrow funtion also can not hoist
test();
var test = () => {
  console.log("vikas");
};

function myName() {
  console.log(name);
  var name = "vikas";
}
myName();

var name = "vikas";
var myName = function () {
  console.log(name);
};
myName();
