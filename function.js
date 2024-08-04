/*
function: This keyword is used to declare a function in JavaScript.
functionName: Replace this with the desired name for your function. It should follow the rules for variable naming (e.g., no spaces, can't start with a number).
parameters: These are placeholders for values that you can pass to the function when calling it. They are optional, and you can have none or multiple parameters.
Function body: This is the block of code enclosed within curly braces {}. It contains the logic and operations the function will perform.
return: You can use the return keyword to specify the value that the function will produce and send back when called. If there is no return statement, the function will implicitly return undefined. */
/* Function :- function is a callable object that executes a block of code.
              in javascript, a function is a block of code that can be executed repeatedly with diffrent 
              inputs.
              functions are used to perform specific tasks, and they can be reused throughtout a program.

              A function is set of instruction or block of code to execute to specific task.
              function needs to be invoked
              function is a reusable */

/* Return keyword :- this keyword is use to end the execution of a function and return a value from
                      the function to the caller. when a return statement is reached, the program exits
                      the function and returns contorl to the calling code.  */

/* callback function :-  A call back function is a function that is passed as an argument to another
                          function, and is executed by that function at a later time. 
                          OR
                          A callback function is a function that is "called back" by another function 
                          after it has completed its execution. 
                          
  Function execution
Function execution refers to the process of calling or invoking a function and executing the code inside its body.
When a function is called, a new execution context is created, and its code is executed line by line.
The JavaScript engine follows the function's scope to access local variables declared within the function's body.
If a variable is not found within the function's scope, the engine looks for it in the outer scope (closure) until it reaches the global scope.
When a function returns a value using the return keyword, the value is sent back to the caller.
The function's execution context is then removed from the call stack, and execution continues with the previous function on the stack.
                          */

// function declaration / normal function :-
function printname() {
  console.log("vikas");
}
printname();
console.log(typeof printname); // ==> datatype = function
// ******************************************************
function addNums(num1, num2) {
  var res = num1 + num2;
  return res;
}
console.log(addNums(4, 5));
//********************************************************
function printfullname(fname, lname, age) {
  console.log(fname, lname, age);
}
printfullname("vikas", "dhyani", 26);

// function data type ==> function
console.log(typeof printfullname);
//******************************************************

// anonymous function
const result1 = (function (a, b) {
  return a + b;
})(3, 5);

console.log(result1);

//////////////////////////////////////////
var persondetail = {
  name: "vikas",
  age: 26,
  ismarried: false,
};
function mydetail() {
  console.log(persondetail.name, persondetail.age, persondetail.ismarried);
}
mydetail();
// //************************** OR *************************
var persondetail = {
  name: "vikas",
  age: 26,
  ismarried: false,
  mydetail: function () {
    // anonymous function ==> without name
    console.log(this.name, this.age, this.ismarried);
  },
};
// method call
persondetail.mydetail();
// property call
console.log(persondetail.name);
console.log(persondetail.age);
console.log(persondetail.ismarried);

// // return keyword
function sayhello() {
  console.log("hello vikas"); // first execute
  return;
  console.log("hello jerry");
  console.log("hello oggy"); // these two statement will not execute because of return keyword
}
sayhello();
console.log("hello tom"); // this is out of function, also execute after function call

//*********** parseInt() ************* */
function myparseInt(x) {
  console.log(parseInt(x));
}
myparseInt(9.99); // 9

//*********** Math.floor() ************* */
function parse(num) {
  return Math.floor(num);
}
console.log(parse(8.8)); // 8

//************************ */
var number = 9.8;
function parse1(num) {
  var res = Math.floor(num);
  return res;
}
var result = parse1(number);
console.log(result);

// Function expression :- we are assigning anonymous funtion in variable.
var addNums = function (num1, num2) {
  var res = num1 + num2;
  return res;
};
console.log(addNums(44, 5));

// ************************* OR ******************************

var addNums = function (num1 = 44, num2 = 5) {
  var res = num1 + num2;
  return res;
};
console.log(addNums());

// rest operator / spread operators :-
function printnums(...numbers) {
  console.log(numbers);
}
console.log(printnums(6, 4, 2, 7, 5, 7, 34, 45, 76, 34, 76, 2, 568, 2546));
// output [6,4,2,7,5,7,34,45,76,34,76,2,568,2546]

// Arrow function:-
var sumnum = (num1, num2) => {
  console.table(num1 + num2);
};
sumnum(4, 6);
// or
var sumnum = (num1, num2) => num1 + num2;
console.log(sumnum(4, 6));
// or with single value
var sumnum = (name) => name;
console.log(sumnum("vikas"));

function calculateBMI(weight, height) {
  const bmi = weight / (height * height);

  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 || bmi < 24.9) {
    return "Normal weight";
  } else if (bmi >= 25 || bmi < 29.9) {
    return "Overweight";
  } else {
    return "Obese";
  }
}
console.log(calculateBMI(65, 1.73));

//****************** addition ********************** */

function addnums(a, b) {
  var sum = a + b;
  return sum;
}
var result = addnums(5, 6);
console.log(result);

//***************** subtraction ********************* */

function subnum(a, b) {
  return a - b;
}
console.log(subnum(8, 5));

//****************** remainder ********************** */
function remainder(a, b) {
  return a % b;
}
console.log(remainder(8, 5));

function calculation(num1, num2) {
  var cacl1 = num1 + num2;
  console.log(cacl1);
  var calc2 = num1 - num2;
  console.log(calc2);
  var calc3 = num1 * num2;
  console.log(calc3);
  var calc4 = num1 / num2;
  console.log(calc4);
}
calculation(8, 5);

function calculation(num1, sign, num2) {
  let result;
  if (sign == "+") {
    result = num1 + num2;
  } else if (sign == "-") {
    result = num1 - num2;
  } else if (sign == "*") {
    result = num1 * num2;
  } else if (sign == "/") {
    result = num1 / num2;
  }
  return result;
}
console.log(calculation(5, "+", 6));

// recursive function :- which call itself inside itself
function decending(n) {
  console.log(n); // 5 , 4 , 3 , 2 , 1 , 0
  if (n == 0) {
    // false, until condition will be true
    return;
  }
  decending(n - 1); // 4
}
decending(5);

// generator function :- Generator functions allow you to pause and resume their execution using the yield keyword. They are useful for dealing with asynchronous code or producing iterable sequences.
function* genfunc() {
  yield 100;
  yield 200;
  yield 300;
}
const genf = genfunc();
console.log(genf.next());
console.log(genf.next());
console.log(genf.next());
console.log(genf.next());

//////////////////////////////////

function myFunc({ a, b }) {
  console.log(a, b);
}
myFunc({ a: 1, b: 2 });

//////////////////////////////////

function constfuncs() {
  var funcs = [];
  for (var i = 0; i < 10; i++) {
    funcs[i] = function () {
      return i;
    };
  }
  return funcs;
}
var funcs = constfuncs();
console.log(funcs[5]());

//////////////////////////////////
