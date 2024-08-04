/* 
definition : it represent the future value, which we ll know later (jo hame baad me pta lgti h)
*/

var myPromise = new Promise((resolve, reject) => {
  console.log("this is my promise");
  //resolve();
  reject();
})
  .then(() => {
    console.log("task resolve");
  })
  .catch(() => {
    console.log("error");
  })
  .finally(() => {
    console.log("finally done");
  });

/*
This JavaScript code snippet demonstrates the creation and handling of a Promise object. Promises are used for handling asynchronous operations in JavaScript. Let's break down each part of the code to understand how it works:

Code Breakdown
Creating the Promise:
*/

var myPromise = new Promise((resolve, reject) => {
  console.log("this is my promise");
  //resolve();
  reject();
});
/*A new Promise object is created. The Promise constructor takes a function as an argument, which is called the executor function. This function itself takes two arguments: resolve and reject.
Inside the executor function, console.log("this is my promise"); is executed immediately, logging the message to the console.
The promise is set to be rejected by calling reject(). The resolve() function is commented out, so it does not execute.
Handling the Promise:
*/
myPromise
  .then(() => {
    console.log("task resolve");
  })
  .catch(() => {
    console.log("error");
  })
  .finally(() => {
    console.log("finally done");
  });
/*
myPromise.then() attaches a callback function to be executed when the promise is resolved. In this case, the callback logs "task resolve" to the console. However, since the promise is rejected, this .then() handler will not be executed.
.catch() attaches a callback function to handle the rejection of the promise. Since the promise is rejected, this callback is executed, logging "error" to the console.
.finally() attaches a callback function that will be executed regardless of whether the promise was resolved or rejected. This ensures that the code within finally runs in either case. Here, it logs "finally done" to the console.
Execution Flow
The executor function of the promise is executed immediately:

Logs: "this is my promise"
The promise is rejected by calling reject().
The promise chain is processed:

The .then() callback is skipped because the promise was rejected.
The .catch() callback is executed because the promise was rejected.
Logs: "error"
The .finally() callback is executed after the .catch() callback.
Logs: "finally done"
Summary
The code first logs "this is my promise" when the promise is created.
Since the promise is rejected, the .then() handler is skipped.
The .catch() handler is executed, logging "error".
The .finally() handler is executed, logging "finally done".
This approach demonstrates how to handle asynchronous operations and ensures that certain code (like cleanup operations) runs regardless of the outcome of the promise by using the .finally() method.

*/

/////////////////////////////////////////////////////////////////////////

var myPromise = new Promise((resolve, reject) => {
  resolve({ name: "vikas", age: 25 });
  //reject("error data");
})
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally done");
  });

///////////////////////////////////////////////////////////
let age = 18;
let ageChecker = new Promise((resolve, reject) => {
  if (age > 18) {
    resolve("u can drive");
  } else {
    reject("u can't drive");
  }
})
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("u must know the traffic rules");
  });

////////////////////////////_fetch_///////////////////////////////////////////

console.log("one"); // these two lines execute immidiatly
console.log("two");

fetch("https://jsonplaceholder.typicode.com/users") //This line initiates a fetch request to the given URL. The fetch operation is asynchronous, so it does not block the execution of the following lines of code. Instead, it registers the callbacks (then, catch, finally) to be executed once the fetch operation completes.
  .then(function (response) {
    return response.json();
    // console.log(response.json());
  })
  .then(function (data) {
    for (let i in data) {
      console.log(`Name : ${data[i].name} , Email: ${data[i].email}`);
    }
  })
  .catch(function (error) {
    console.log(error, "can't fetch data");
  })
  .finally(function () {
    console.log("finnaly done");
  });

console.log("three"); //These two lines are executed immediately after the fetch request is initiated
console.log("four");

/* output :

one
two
three
four
<Response object>  // This is the response object from the fetch operation.
{ ... }            // This is the parsed JSON data from the response.
finally done
*/
