/*JavaScript's localStorage provides a simple way to store and retrieve data locally on a user's web browser. Here are the main methods:

1. setItem(key, value): Stores a value with a specified key.

localStorage.setItem('name', 'John Doe');


1. getItem(key): Retrieves the value with the specified key.

const name = localStorage.getItem('name');


1. removeItem(key): Deletes the value with the specified key.

localStorage.removeItem('name');


1. clear(): Deletes all stored data.

localStorage.clear();


1. key(index): Returns the key at the specified index.

const key = localStorage.key(0);


1. length: Returns the number of stored items.

const count = localStorage.length;


Note that localStorage stores data as strings, so you might need to use JSON.stringify() and JSON.parse() to store and retrieve complex data structures like objects or arrays.

Example:*/

var user = {
     name: 'John', 
     age: 30 
 };
 localStorage.setItem('user', JSON.stringify(user));
 
 var storedUser = localStorage.getItem('user');
 if (storedUser) {
     storedUser = JSON.parse(storedUser);
     console.log(storedUser);
 } else {
     console.log("No user data found in local storage.");
 }
 

/*Remember that localStorage has some limitations, like limited storage capacity and data persistence even after the browser is closed. If you need more advanced storage solutions, consider using other options like sessionStorage or IndexedDB. */
