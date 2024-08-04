# Arrow Functions

Arrow functions allow us to write shorter function syntax:

let hello = () => {
return "Hello World!";
};
console.log(hello());

**It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:**

let hello = () => "Hello World!";
console.log(hello());

**Arrow Function With Parameters:**

let hello = (val) => "Hello " + val;
console.log(hello("world"));

# What About this?

1. The handling of <this> is also different in arrow functions compared to regular functions.

2. In short, with arrow functions there is no binding of <this.>

3. In regular functions the <this> keyword represented the object that called the function, which could be the window, the document, a button or whatever.

4. With arrow functions, the <this> keyword always represents the object that defined the arrow function.
