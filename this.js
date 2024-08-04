/*
In JavaScript, the keyword "this" is a special keyword that refers to the current execution context of a function or object. It can have different values depending on how it's used:

- Global context: Refers to the global object (usually the window or global object). */
console.log(this);
/*
- Function context: Refers to the function itself (allows access to its properties and methods).
- Object method context: Refers to the object that the method belongs to.
- Constructor context: Refers to the newly created object when used in a constructor function.
- Event handler context: Refers to the element that triggered the event.

Understanding "this" is crucial in JavaScript, as it helps you access and manipulate objects, functions, and their properties. */
let myobj = {
  fName: "vikas",
  lName: "dhyani",
  age: 26,
  sayMyName: function () {
    console.log(this); // pura ka pura object print ho jayega
    console.log(this.fName, this.lName, this.age);
  },
};
myobj.sayMyName();

//////////////////////////////////////////////////////
function personDetail() {
  console.log(`Person detail : name is ${this.name} and age is ${this.age}`);
}
let detail1 = {
  name: "Vikas",
  age: 23,
  about: personDetail,
};
let detail2 = {
  name: "Thor",
  age: Infinity,
  about: personDetail,
};
let detail3 = {
  name: "IronMan",
  age: Infinity,
  about: personDetail,
};
detail1.about();
detail2.about();
detail3.about();

//Here are some examples to illustrate how the value of "this" changes depending on the context:

//1. Global context:

console.log(this); // outputs the global object (window or global)

//1. Function context:

function myFunction() {
  console.log(this); // outputs the function itself
}

myFunction();

//1. Object method context:

const myObject = {
  myMethod: function () {
    console.log(this); // outputs the object (myObject)
  },
};

myObject.myMethod();

//1. Constructor context:

function MyConstructor() {
  console.log(this); // outputs the newly created object
}

const myInstance = new MyConstructor(); // but u can not create object using this keyword with arrow function, arrow function does not accept this keyword when it has not parent scope

//1. Event handler context:

const myButton = document.getElementById("myButton");

myButton.addEventListener("click", function () {
  console.log(this); // outputs the button element (myButton)
});

//These examples demonstrate how "this" refers to different objects or functions depending on the context in which it's used. Let me know if you have any further questions! */
