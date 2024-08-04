/////////////////////////////////////////////////////////////////////////////////////////////////////////////
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<|>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

# JavaScript is a versatile programming language primarily used for creating interactive and dynamic web content. Here's a high-level overview of how JavaScript works:

1. Execution Environment
   JavaScript code is executed in an environment known as the JavaScript engine. The engine is a part of the web browser (such as V8 in Google Chrome, SpiderMonkey in Firefox, and JavaScriptCore in Safari). When a web page is loaded, the browser’s engine reads the JavaScript code, interprets it, and executes it.

2. Loading and Parsing
   The JavaScript engine (like V8 in Google Chrome) reads the code and breaks it into smaller parts, creating an Abstract Syntax Tree (AST).

- Inline Script: If it's an inline script, the browser executes it immediately as it reads through the HTML.
- External Script: If it's an external script, the browser fetches the script file from the server, parses it, and then executes it.

3. Execution Contexts and Call Stack
   JavaScript executes code in execution contexts, primarily in two contexts:

- Global Execution Context: Created when a web page is first loaded, containing the global object (window in browsers).
- Function Execution Context: Created whenever a function is called.

Each execution context has:

- Variable Object (VO): Contains function arguments, inner variable declarations, and function declarations.
- Scope Chain: Consists of the variable object and the outer scope, used for variable lookup.
- this Keyword: Refers to the object that is currently being processed.

4. Call Stack
   JavaScript is single-threaded, meaning it can only do one thing at a time. The call stack keeps track of function calls:

- When a function is called, a new execution context is created and pushed onto the stack.
- When the function finishes execution, its context is popped off the stack.

5. Memory Management
   JavaScript allocates memory for variables and functions:

- Heap: Where objects and functions are allocated.
- Stack: Where primitive values (numbers, strings, etc.) and execution contexts are stored.

6. Event Loop and Asynchronous Programming
   JavaScript handles asynchronous operations using an event loop:

   **The event loop in JavaScript is a crucial concept for understanding how asynchronous operations are handled**

- Event Loop: Continuously checks the call stack and the task queue(callback queue or message queue). If the stack is empty, it picks tasks from the queue and pushes them onto the stack for execution.
- Web APIs: Asynchronous tasks (like HTTP requests, timers) are handled by the browser's Web APIs. When these tasks complete, their callbacks are pushed to the task queue.

7. Non-blocking I/O(input/output)
   JavaScript can perform non-blocking I/O operations (like AJAX requests, file reads) using callbacks, promises, and async/await syntax:

- Callbacks: Functions passed as arguments to be called once an operation completes.
- Promises: Objects representing the eventual completion or failure of an asynchronous operation.
- async/await: Syntax for handling promises in a more readable manner.

8. Event Handling
   JavaScript interacts with web pages via events (clicks, keypresses, etc.):

- Event listeners are attached to elements and execute callback functions when events occur.
- The Event object contains information about the event (e.g., mouse coordinates, key pressed).

Example of JavaScript Code Execution

// Global Execution Context

let globalVar = "I am global";

function outerFunction() {
let outerVar = "I am outer";

    function innerFunction() {
        let innerVar = "I am inner";
        console.log(globalVar); // Accessing global variable
        console.log(outerVar); // Accessing outer function variable
        console.log(innerVar); // Accessing inner function variable
    }

    innerFunction();

}

outerFunction();

**~~Modern JavaScript Features~~**
Modern JavaScript includes various features like:

- ES6+ Syntax: Arrow functions, template literals, destructuring, modules.
- Advanced Data Structures: Sets, Maps, WeakSets, WeakMaps.
- Modules: Import/export statements for modular code.

JavaScript's flexibility and robust environment make it a powerful tool for building dynamic and interactive web applications.
