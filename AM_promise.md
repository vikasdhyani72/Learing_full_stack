# A promise in JavaScript is a way to handle asynchronous operations. Promises are used to avoid callback hell and make asynchronous code more readable and easier to manage.

we use promise _to manage fetch data from server, set the timeout , read files_

**JavaScript में हम प्रॉमिसेज़ का उपयोग इसलिए करते हैं ताकि असिंक्रोनस ऑपरेशन्स (जैसे कि सर्वर से डेटा लाना, टाइमआउट सेट करना, या फ़ाइल पढ़ना) को मैनेज किया जा सके। प्रॉमिसेज़ हमें इस बात की सुविधा देती हैं कि हम कोड को अधिक पठनीय और प्रबंधनीय तरीके से लिख सकें।**

**Basic Concept: three state of promis**

1. Pending: The initial state, neither fulfilled nor rejected.
2. Fulfilled: The operation completed successfully.
3. Rejected: The operation failed.

**Creating a Promise:**
A promise is created using the Promise constructor, which takes a function as an argument. This function is called the executor function and it has two parameters: resolve and reject. You use resolve to indicate that the operation was successful and reject to indicate that it failed.

Example:
<promise consturctor>
let promise = new Promise((resolve, reject) => {
let success = true; // Simulate an operation that could succeed or fail

if (success) {
resolve("The operation was successful!");
} else {
reject("The operation failed!");
}
});

**Using a Promise:**
_You use the .then() method to handle a promise when it is fulfilled, and the .catch() method to handle it when it is rejected._
promise
.then((message) => {
console.log(message); // "The operation was successful!"
})
.catch((error) => {
console.log(error); // "The operation failed!"
});

**Asynchronous Operation Example:**
Let's see a more practical example with an asynchronous operation, like fetching data from an API:

function fetchData() {
return new Promise((resolve, reject) => {
setTimeout(() => {
let data = { name: "John", age: 30 };
resolve(data); // Simulate successful data fetching
}, 2000);
});
}

fetchData()
.then((data) => {
console.log(data); // { name: "John", age: 30 }
})
.catch((error) => {
console.log(error);
});

**Summary:**

- A promise represents a value that may be available now, or in the future, or never.
- It can be in one of three states: pending, fulfilled, or rejected.
- You create a promise using the Promise constructor and handle its result using .then() for success and .catch() for errors.

_Using promises helps you write cleaner and more manageable asynchronous code compared to traditional callback-based approaches._

<note> To fetch data from a server in JavaScript, you can use the fetch API, which is a modern, promise-based approach for making HTTP requests.

fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((response) => {
return response.json(); // data from the server which we have fetch
})
.then((data) => {
console.log(data);
})
.catch((reject) => {
console.log("rejected ", reject);
})
.finally(() => {
console.log("finally done");
});

## get values(data) from fetch API

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title></title>
  </head>
  <body>
    <div id="container"></div>
    <script>
      let containerEl = document.getElementById("container");
      console.log("one");
      console.log("two");
      console.log("three");

      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          for (let i = 0; i < data.length; i++) {
            let el1 = data[i];
            console.log("NAME:" + el1.name, "EMAIL:" + el1.email);
            let textDisplay = "NAME:" + el1.name + " " + "EMAIL:" + el1.email;
            let textNode = document.createTextNode(textDisplay);
            let creatEl = document.createElement("p");
            creatEl.appendChild(textNode);
            containerEl.appendChild(creatEl);
          }
        })
        .catch((reject) => {
          console.log("rejected ", reject);
        })
        .finally(() => {
          console.log("finally done");
        });

    </script>

  </body>
</html>
