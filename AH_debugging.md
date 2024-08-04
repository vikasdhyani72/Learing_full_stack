Debugging
As you learn more advanced concepts of JavaScript, you will start making mistakes in your code. Sometimes these mistakes can be tough to find.

Debugging is finding and fixing errors in code.

What is a bug?
A bug is an error that causes the program to generate an unexpected output different from the expected output or no output. Following are some of the most common types of error one usually encounter in JavaScript:

Syntax error
Reference Error
Type Error
Wrong answer / Logical error
Time limit exceeded
Compilation error continued
How do you identify a 'Reference/Compilation error'?

//////////////////////////////////////////////////////////////////////

When you run your code and there is an error, you will typically see it in the output.

For example, if you run the below code, you will get a syntax error.

var name = "Bob";
if (name == Bob) {
consoloe.log(Name);
}
Error

Uncaught ReferenceError: Bob is not defined
at <anonymous>:2:13
(anonymous) @ VM1609:2

The error description says that there is an error on line 2. The exact error is explained in the first line of the description: Uncaught ReferenceError: Bob is not defined.

It is clearly saying that we're comparing the string variable name which has the string "Bob" with another variable named Bob instead of comparing it with the string "Bob". The error goes away after adding " (quotes) around Bob in the if statement.

//////////////////////////////////////////////////////////////////////

Runtime error
A runtime error occurs when your syntax is correct but the compiler (or interpreter in case of JavaScript), is still not able to run the code due to an error.

Example:

const pi = 3.14;
pi = 3.14159; //TypeError (one of the runtime errors)
If you run the above code, you will get this error.

Uncaught TypeError: Assignment to constant variable.
at <anonymous>:2:4
There is an error in line 2 because we are trying to re-assign a new value to a constant variable which is not possible.

////////////////////////////////////////////////

Logical Error or Wrong Answer (WA)
A logical error is an error in a program that occurs when the code compiles and runs without producing any error messages, but it does not produce the expected or desired output.

Instead, it performs a different computation or provides incorrect results due to a flaw in the algorithm or logic of the program.

Logical errors are the hardest to find in a program. One needs to have enough debugging practice to figure out logical errors.

They can be categorized into different types:

Incorrect Conditions
Incorrect Index
Incorrect variable usage
