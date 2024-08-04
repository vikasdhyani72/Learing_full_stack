# JavaScript

JavaScript is the world's most popular programming language.

JavaScript is the programming language of the Web.

JavaScript is easy to learn.

Why Study JavaScript?
JavaScript is one of the 3 languages all web developers must learn:

1. HTML to define the content of web pages.

2. CSS to specify the layout of web pages.

3. JavaScript to program the behavior of web pages.

JavaScript Can Change HTML Content
One of many JavaScript HTML methods is getElementById().

JavaScript Can Change HTML Attribute Values
JavaScript Can Change HTML Styles (CSS)
ex : document.getElementById("demo").style.fontSize = "35px";

Did You Know?
JavaScript and Java are completely different languages, both in concept and design.

JavaScript was invented by Brendan Eich in 1995, and became an ECMA standard in 1997.

ECMA-262 is the official name of the standard. ECMAScript is the official name of the language.

The <script> Tag
In HTML, JavaScript code is inserted between <script> jsCode </script> tags.

JavaScript in <head> or <body>
You can place any number of scripts in an HTML document.

Scripts can be placed in the <body>, or in the <head> section of an HTML page, or in both.

# External JavaScript

Scripts can also be placed in external files:

External scripts are practical when the same code is used in many different web pages.

JavaScript files have the file extension .js.

To use an external script, put the name of the script file in the src (source) attribute of a <script> tag:

You can place an external script reference in <head> or <body> as you like.

The script will behave as if it was located exactly where the <script> tag is located.

External scripts cannot contain <script> tags.

# External JavaScript Advantages

Placing scripts in external files has some advantages:

- It separates HTML and code

- It makes HTML and JavaScript easier to read and maintain

- Cached JavaScript files can speed up page loads

To add several script files to one page - use several script tags:

1. <script src="myScript1.js"></script>
2. <script src="myScript2.js"></script>

# JavaScript Display Possibilities

JavaScript can "display" data in different ways:

- Writing into an HTML element, using innerHTML.

- Writing into the HTML output using document.write().

- Writing into an alert box, using window.alert().

- Writing into the browser console, using console.log().

# JavaScript Programs

- A computer program is a list of "instructions" to be "executed" by a computer.

- In a programming language, these programming instructions are called statements.

- A JavaScript program is a list of programming statements.

- In HTML, JavaScript programs are executed by the web browser.

# JavaScript Statements

JavaScript statements are composed of:

- Values, Operators, Expressions, Keywords, and Comments.

- Most JavaScript programs contain many JavaScript statements.

- The statements are executed, one by one, in the same order as they are written.

- JavaScript programs (and JavaScript statements) are often called JavaScript code.

Semicolons ;
Semicolons separate JavaScript statements.

Add a semicolon at the end of each executable statement:

On the web, you might see examples without semicolons.
Ending statements with semicolon is not required, but highly recommended.

JavaScript White Space
JavaScript ignores multiple spaces. You can add white space to your script to make it more readable.

JavaScript Line Length and Line Breaks
For best readability, programmers often like to avoid code lines longer than 80 characters.

If a JavaScript statement does not fit on one line, the best place to break it is after an operator:

JavaScript Code Blocks
JavaScript statements can be grouped together in code blocks, inside curly brackets {...}.

The purpose of code blocks is to define statements to be executed together.

One place you will find statements grouped together in blocks, is in JavaScript functions:

JavaScript Syntax
JavaScript Values
The JavaScript syntax defines two types of values:

Fixed values : Fixed values are called Literals

Variable values : Variable values are called Variables.

JavaScript Variables
In a programming language, variables are used to store data values.

JavaScript uses the keywords var, let and const to declare variables.

An equal sign is used to assign values to variables.

JavaScript Expressions
An expression is a combination of values, variables, and operators, which computes to a value.

The computation is called an evaluation.

JavaScript Identifiers / Names
Identifiers are JavaScript names.

Identifiers are used to name variables and keywords, and functions.

The rules for legal names are the same in most programming languages.

A JavaScript name must begin with:

A letter (A-Z or a-z)

A dollar sign ($)

Or an underscore (_)

Subsequent characters may be letters, digits, underscores, or dollar signs.

Note
Numbers are not allowed as the first character in names.

This way JavaScript can easily distinguish identifiers from numbers.

JavaScript is Case Sensitive
All JavaScript identifiers are case sensitive.

The variables lastName and lastname, are two different variables:

JavaScript and Camel Case
Historically, programmers have used different ways of joining multiple words into one variable name:

Hyphens:

first-name, last-name, master-card, inter-city.

Hyphens are not allowed in JavaScript. They are reserved for subtractions.

Underscore:

first_name, last_name, master_card, inter_city.

Upper Camel Case (Pascal Case):

FirstName, LastName, MasterCard, InterCity.

Lower Camel Case:

JavaScript programmers tend to use camel case that starts with a lowercase letter:

firstName, lastName, masterCard, interCity.

JavaScript Character Set
JavaScript uses the Unicode character set.

Unicode covers (almost) all the characters, punctuations, and symbols in the world.

JavaScript Comments
JavaScript comments can be used to explain JavaScript code, and to make it more readable.

JavaScript comments can also be used to prevent execution, when testing alternative code.

Single Line Comments
Single line comments start with //.

Any text between // and the end of the line will be ignored by JavaScript (will not be executed).

Multi-line Comments
Multi-line comments start with /* and end with */.

Any text between /* and */ will be ignored by JavaScript.

It is most common to use single line comments.
Block comments are often used for formal documentation.

Using Comments to Prevent Execution
Using comments to prevent execution of code is suitable for code testing.

Adding // in front of a code line changes the code lines from an executable line to a comment.

JavaScript Variables
Variables are Containers for Storing Data
JavaScript Variables can be declared in 4 ways:

Automatically

Using var

Using let

Using const

Note
It is considered good programming practice to always declare variables before use.

From the examples you can guess:

x stores the value 5

y stores the value 6

z stores the value 11

Note
The var keyword was used in all JavaScript code from 1995 to 2015.

The let and const keywords were added to JavaScript in 2015.

The var keyword should only be used in code written for older browsers.

When to Use var, let, or const?

1. Always declare variables

2. Always use const if the value should not be changed

3. Always use const if the type should not be changed (Arrays and Objects)

4. Only use let if you can't use const

5. Only use var if you MUST support old browsers.

JavaScript Identifiers
All JavaScript variables must be identified with unique names.

These unique names are called identifiers.

Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

The general rules for constructing names for variables (unique identifiers) are:

Names can contain letters, digits, underscores, and dollar signs.

Names must begin with a letter.

Names can also begin with $ and \_ (but we will not use it in this tutorial).

Names are case sensitive (y and Y are different variables).

Reserved words (like JavaScript keywords) cannot be used as names.

Note
JavaScript identifiers are case-sensitive.

The Assignment Operator
In JavaScript, the equal sign (=) is an "assignment" operator, not an "equal to" operator.

Note
The "equal to" operator is written like == in JavaScript.

JavaScript Data Types
JavaScript variables can hold numbers like 100 and text values like "John Doe".

In programming, text values are called text strings.

JavaScript can handle many types of data, but for now, just think of numbers and strings.

Strings are written inside double or single quotes. Numbers are written without quotes.

If you put a number in quotes, it will be treated as a text string.

Declaring a JavaScript Variable
Creating a variable in JavaScript is called "declaring" a variable.

You declare a JavaScript variable with the var or the let keyword:

Note
It's a good programming practice to declare all variables at the beginning of a script.

One Statement, Many Variables
You can declare many variables in one statement.

Start the statement with let and separate the variables by comma:

Value = undefined
In computer programs, variables are often declared without a value. The value can be something that has to be calculated, or something that will be provided later, like user input.

A variable declared without a value will have the value undefined.

Re-Declaring JavaScript Variables
If you re-declare a JavaScript variable declared with var, it will not lose its value.

Types of JavaScript Operators
There are different types of JavaScript operators:

Arithmetic Operators

Assignment Operators

Comparison Operators

String Operators

Logical Operators

Bitwise Operators

Ternary Operators

Type Operators

JavaScript Data Types
JavaScript has 8 Datatypes

1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object

The Object Datatype
The object data type can contain:

1. An object
2. An array
3. A date

Note
A JavaScript variable can hold any type of data.

The Concept of Data Types
In programming, data types is an important concept.

To be able to operate on variables, it is important to know something about the type.

Without data types, a computer cannot safely solve this:

JavaScript Types are Dynamic
JavaScript has dynamic types. This means that the same variable can be used to hold different data types:

JavaScript Strings
A string (or a text string) is a series of characters like "John Doe".

Strings are written with quotes. You can use single or double quotes:

JavaScript Numbers
All JavaScript numbers are stored as decimal numbers (floating point).

Numbers can be written with, or without decimals:

The typeof Operator
You can use the JavaScript typeof operator to find the type of a JavaScript variable

JavaScript Functions
A JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is executed when "something" invokes it (calls it).

JavaScript Function Syntax
A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

The parentheses may include parameter names separated by commas:
(parameter1, parameter2, ...)

The code to be executed, by the function, is placed inside curly brackets: {}

Function parameters are listed inside the parentheses () in the function definition.

Function arguments are the values received by the function when it is invoked.

Inside the function, the arguments (the parameters) behave as local variables.

Function Invocation
The code inside the function will execute when "something" invokes (calls) the function:

When an event occurs (when a user clicks a button)

When it is invoked (called) from JavaScript code

Automatically (self invoked)

Function Return
When JavaScript reaches a return statement, the function will stop executing.

If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

Functions often compute a return value. The return value is "returned" back to the "caller":

Why Functions?
With functions you can reuse code

You can write code that can be used many times.

You can use the same code with different arguments, to produce different results.

JavaScript Events
HTML events are "things" that happen to HTML elements.

When JavaScript is used in HTML pages, JavaScript can "react" on these events.

HTML Events
An HTML event can be something the browser does, or something a user does.

Here are some examples of HTML events:

An HTML web page has finished loading

An HTML input field was changed

An HTML button was clicked

Often, when events happen, you may want to do something.

JavaScript lets you execute code when events are detected.

HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.

JavaScript Event Handlers
Event handlers can be used to handle and verify user input, user actions, and browser actions:

Things that should be done every time a page loads

Things that should be done when the page is closed

Action that should be performed when a user clicks a button

Content that should be verified when a user inputs data

And more ...

Many different methods can be used to let JavaScript work with events:

HTML event attributes can execute JavaScript code directly

HTML event attributes can call JavaScript functions

You can assign your own event handler functions to HTML elements

You can prevent events from being sent or being handled.

And more ...
