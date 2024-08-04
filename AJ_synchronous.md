# synchronous and asynchronous

In JavaScript, synchronous and asynchronous refer to the order in which code is executed and how it interacts with other tasks.

**Synchronous/blocking code:**
In synchronous code execution, statements are executed one after the other, in the order they appear in the code. Each statement must wait for the previous one to finish executing before it can run. Synchronous operations block further execution until they are completed.
For example:

console.log("Statement 1");
for(let i = 0; i<1000000000; i++){ it is blocking the code and take some time to execute next exexecution.
}
console.log("Statement 2");
console.log("Statement 3");

In this example, "Statement 2" will not be executed until "Statement 1" finishes executing, and "Statement 3" will not be executed until "Statement 2" finishes.

**Asynchronous/non blocking code:**
In asynchronous code execution, statements can be executed out of order, and operations don't necessarily block further execution. Asynchronous operations allow other code to run while waiting for long-running tasks to complete, such as fetching data from a server or waiting for a user input. Common asynchronous mechanisms in JavaScript include callbacks, Promises, and async/await.

_Here's an example using callbacks:_

console.log("Statement 1");
setTimeout(function() {
console.log("Statement 2");
}, 2000);
console.log("Statement 3");

In this example, "Statement 1" and "Statement 3" will be executed immediately, while "Statement 2" will be executed after a delay of 1000 milliseconds. During the 1-second delay, other code can continue to execute.
