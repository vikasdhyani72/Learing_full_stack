/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// lexical environment/scoping : u can access the value from the parent to child , global to parent, but can not access child to parent or parent to glogal variable/function
let a = 10;
function parent() {
  let b = 20;
  console.log("5=>", a);

  function child() {
    console.log("8=>", a);
    console.log("9=>", b);
  }
  child();
}
parent();

// closure (function chaining)
function parent(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
let result = parent(2)(3)(4);
console.log(result);

/* closure 
In JavaScript, closure refers to the combination of a function bundled together with references to its surrounding state (the lexical environment) where it was declared. This allows the function to access and manipulate variables from its containing scope even after that scope has exited.
*/
//Here's a simple example:

function outerFunction() {
  let outerVar = "I am from outer function";

  function innerFunction() {
    console.log(outerVar); // Accessing outerVar from the outer scope
  }

  return innerFunction;
}

const innerFunc = outerFunction();
innerFunc(); // Output: "I am from outer function"
//In this example, innerFunction is a closure because it accesses the outerVar variable from its outer scope, even though outerFunction has already finished executing. The innerFunction "closes over" the scope of outerFunction, retaining access to its variables.

//////////////////////////////////////////////
/*
A closure is a function that has access to its outer scope even after the outer scope has finished executing. In this case, the inner function returned by addNums has access to the variable x from its outer scope, even though addNums has already finished executing. */
function addNums(x) {
  return function (y) {
    return x + y;
  };
}
const x = addNums(5);
console.log(x(6)); // 11
/*
addNums is a function that takes one parameter x and returns another function.
The inner function, which is returned by addNums, takes one parameter y.
Inside the inner function, it adds x (which is captured from the outer scope) to y and returns the result.
*/
/*So, when you call const x = addNums(5);, it creates a closure where x is bound to 5. Then, when you call x(6);, it effectively adds 5 (the captured x value) to 6, resulting in 11.
 */
