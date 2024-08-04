/*async and await are part of modern JavaScript that help in handling asynchronous operations more efficiently and in a more readable manner compared to traditional methods like callbacks or Promises alone.

async Functions:
An async function is a function that returns a Promise. It allows you to use await within the function to pause execution until the awaited Promise resolves or rejects.

await Keyword:
The await keyword is used to wait for a Promise to resolve. It can only be used inside an async function. When await is used, it pauses the execution of the async function until the Promise resolves, and then resumes execution with the resolved value of the Promise.

Basic Example
Here's a basic example that demonstrates how async and await work together:
*/

// Simulating a function that returns a Promise
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000);
  });
}

// Using async and await to handle the Promise
async function displayData() {
  console.log("Fetching data...");
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the async function
displayData();

/*Explanation:

fetchData Function:
Returns a Promise that resolves with the string "Data fetched successfully!" after a delay of 2 seconds.

displayData Function:
* Declared as async, allowing the use of await within it.
* Logs "Fetching data..." to the console.
* Uses await to wait for the fetchData Promise to resolve.
* Once the Promise resolves, logs the resolved value ("Data fetched successfully!") to the console.
* If the Promise rejects, it logs the error to the console.*/

////////////////////////////////////////////////

/*Handling Errors with async/await :
You can handle errors in async functions using try...catch blocks. Here's an example that simulates a possible error during the data fetch:
*/

function fetchDataWithError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error: Failed to fetch data!");
    }, 2000);
  });
}

async function displayDataWithErrorHandling() {
  console.log("Fetching data...");
  try {
    const data = await fetchDataWithError();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

displayDataWithErrorHandling();

//By using async and await, you can write asynchronous code that is more readable and maintainable, resembling synchronous code while still being non-blocking.

/////////////////////////////////////////////////

//Real-world Example with Fetch API :
async function fetchData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    //console.log(response);

    let data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
fetchData().then((result) => {
  console.log(result);
});
