## DOM (Document Object Model): Allows JavaScript to manipulate HTML and CSS.

**The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the structure of a document as a tree-like data structure, where each node represents an element, attribute, or piece of text.**

_The DOM allows developers to interact with and manipulate the document in various ways, such as:_

1. Accessing elements: Selecting and accessing specific elements in the document, like buttons, forms, or images.
2. Modifying content: Changing the text, attributes, or styles of elements.
3. Adding events: Attaching event listeners to elements to respond to user interactions, like clicks or hover effects.
4. Creating elements: Dynamically creating new elements and inserting them into the document.
5. Removing elements: Deleting elements from the document.

**The DOM is a vital part of web development, as it enables JavaScript code to interact with and manipulate web pages. It's used extensively in client-side scripting, dynamic web development, and web applications.**

Here's a simple example of how the DOM works:

HTML:

<p id="myPara">Hello World!</p>

JavaScript:

const para = document.getElementById("myPara");
para.textContent = "Hello Universe!"; // Changes the text content of the paragraph element

In this example, the JavaScript code accesses the paragraph element using its ID, and then modifies its text content using the DOM.
