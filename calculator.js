//Here are some examples of arithmetic operations using if-else statements:

//1. Simple Calculator:

function calculate(num1, num2, operation) {
  if (operation === "add") {
    return num1 + num2;
  } else if (operation === "subtract") {
    return num1 - num2;
  } else if (operation === "multiply") {
    return num1 * num2;
  } else if (operation === "divide") {
    if (num2 !== 0) {
      return num1 / num2;
    } else {
      return "Error: Division by zero";
    }
  } else {
    return "Error: Invalid operation";
  }
}

const result = calculate(10, 2, "add");
console.log(result); // outputs: 12

//////////////////////////////////////////////

//1. Area Calculator:
function calculateArea(shape, value1, value2) {
  if (shape === "rectangle") {
    return value1 * value2;
  } else if (shape === "circle") {
    return Math.PI * value1 ** 2;
  } else if (shape === "triangle") {
    return 0.5 * value1 * value2;
  } else {
    return "Error: Invalid shape";
  }
}

const result1 = calculateArea("circle", 5, 0);
console.log(result1); // outputs: 78.53981633974483

////////////////////////////////////////////////

//1. Grade Calculator:
function calculateGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

const result2 = calculateGrade(85);
console.log(result2); // outputs: B

/*These examples demonstrate how if-else statements can be used to perform different arithmetic operations based on conditions. */

// class calculator:-
class Calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }
  add() {
    return this.num1 + this.num2;
  }
  sub() {
    return this.num1 - this.num2;
  }
  mul() {
    return this.num1 * this.num2;
  }
  div() {
    return this.num1 / this.num2;
  }
}
let c1 = new Calculator(10, 12);
console.log(c1.add());
console.log(c1.sub());
console.log(c1.mul());
console.log(c1.div());
/* summary 

1.Class Definition (Calculator):
The code starts with a class definition named Calculator.
Inside this class, there's a constructor method which initializes two properties num1 and num2 with the values passed to the constructor.

2.Constructor Method:
The constructor method takes two parameters, num1 and num2, and assigns them to the properties this.num1 and this.num2 respectively.

3.Instance Methods (add, sub, mul, div):
Following the constructor, there are four instance methods defined within the class: add, sub, mul, and div.
add method returns the sum of num1 and num2.
sub method returns the difference between num1 and num2.
mul method returns the product of num1 and num2.
div method returns the division result of num1 by num2.

4.Instantiation and Method Invocation:
After defining the Calculator class, an instance of Calculator is created using the new keyword with values 10 and 12 passed as arguments.
This instance is assigned to the variable c1.
Then, the add, sub, mul, and div methods of the c1 object are invoked using console.log() to print out the results.
*/