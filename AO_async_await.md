# what does async await in js ?

**In JavaScript, async and await are keywords used to work with asynchronous code more easily and readably. They are part of the language's syntax for handling promises, which represent the eventual completion (or failure) of asynchronous operations.**

_async Keyword_

- Used to declare a function as asynchronous.
- An async function always returns a promise. If the function returns a value, the promise will be resolved with that value. If the function throws an error, the promise will be rejected with that error.

_await Keyword_

- Used inside an async function to pause execution until a promise is settled (resolved or rejected).
- The await expression causes the async function to pause execution and wait for the promise to resolve or reject.
- Once the promise is settled, await returns the resolved value or throws the rejected value.

Example
Here is a simple example to illustrate how async and await work together:

_A function that returns a promise which resolves after 2 seconds_
function delay(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}

_An async function using await to wait for the delay_
async function example() {
console.log('Waiting...');
await delay(2000); // Pauses here for 2 seconds
console.log('Done waiting!');
}

<!-- Calling the async function -->

example();

<!-- Output:
Waiting...
(2 seconds pause)
Done waiting! -->

_Benefits of async/await_

- Readability: Makes asynchronous code look and behave like synchronous code, which is easier to read and understand.
- Error Handling: Use try/catch blocks within async functions to handle errors in a way similar to synchronous code.

**Error Handling Example :-**

async function fetchData() {
try {
let response = await fetch('https://api.example.com/data');
if (!response.ok) {
throw new Error('Network response was not ok');
}
let data = await response.json();
console.log(data);
} catch (error) {
console.error('Fetch error:', error);
}
}
fetchData();

**Key Points**

1. Promises: async/await is syntactic sugar over promises. They don't introduce a new way of dealing with asynchronous code but provide a cleaner syntax.
2. Function Context: await can only be used within an async function. Using it outside of an async function will result in a syntax error.
3. Using async and await can greatly simplify the management of asynchronous operations, making your code easier to write and maintain.

//////////////////////////_HINDI_///////////////////////////

JavaScript में async और await keywords का उपयोग asynchronous programming को आसान और अधिक पठनीय बनाने के लिए किया जाता है। ये keywords हमें asynchronous कोड को synchronous कोड की तरह लिखने की अनुमति देते हैं। आइए इन्हें विस्तार से समझते हैं:

async Keyword
async keyword का उपयोग किसी function के पहले किया जाता है और यह बताता है कि यह function asynchronous है। इसका मतलब है कि यह function एक Promise को return करेगा।

उदाहरण:

async function fetchData() {
return "Data fetched";
}
यह function fetchData एक Promise return करेगा जो "Data fetched" value को resolve करेगा।

await Keyword
await keyword का उपयोग केवल async function के अंदर ही किया जा सकता है। यह किसी Promise को await करता है और जब तक वह Promise resolve या reject नहीं हो जाता, तब तक function के execution को रोक देता है।

उदाहरण:

async function fetchData() {
let response = await fetch('https://api.example.com/data');
let data = await response.json();
console.log(data);
}
यहां, await keyword का उपयोग fetch call और उसके response को parse करने के लिए किया गया है। जब तक fetch request पूरी नहीं हो जाती, तब तक function रुका रहेगा।

पूरा उदाहरण:

async function fetchUserData() {
try {
let response = await fetch('https://jsonplaceholder.typicode.com/users');
let users = await response.json();
console.log(users);
} catch (error) {
console.error('Error fetching user data:', error);
}
}

fetchUserData();
इस उदाहरण में:

async function fetchUserData() एक asynchronous function है।
await fetch('https://jsonplaceholder.typicode.com/users') fetch call के promise को await करता है।
await response.json() response के JSON में बदलने के promise को await करता है।
अगर कोई error होती है तो उसे catch block में handle किया जाता है।
निष्कर्ष:
async keyword किसी function को asynchronous बनाता है और वह हमेशा एक Promise return करेगा।
await keyword का उपयोग Promise को await करने के लिए किया जाता है और यह केवल async function के अंदर ही उपयोग किया जा सकता है।
इन keywords का उपयोग करके asynchronous कोड को लिखना बहुत सरल और readable हो जाता है, जिससे code maintenance और debugging भी आसान हो जाती है।
