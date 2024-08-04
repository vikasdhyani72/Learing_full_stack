//
//Currying in JavaScript (and in functional programming in general) is a technique where a function is transformed into a sequence of functions, each taking a single argument. Instead of taking all arguments at once, a curried function takes the first argument and returns a new function that takes the next argument, and so on, until all arguments have been provided.

/*
Benefits of Currying:
1. Reusability: Curried functions can be reused with some arguments pre-specified.
2. Function Composition: Currying allows for easier composition of functions.
3. Partial Application: You can create a partially applied function by fixing a few arguments.
*/

// non currying function
function add(a, b, c) {
  return a + b + c;
}

console.log(add(1, 2, 3)); // Output: 6

// currying function
function sum(a) {
  return function add1(b) {
    return function add2(c) {
      return a + b + c;
    };
  };
}
console.log(sum(2)(3)(4));

//Currying transforms a function that takes multiple arguments into a sequence of functions that each take a single argument. It enhances reusability, composability, and readability in functional programming and is a powerful technique in JavaScript for handling functions more flexibly.
