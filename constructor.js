/* 
Constructor function :- is a special type of function that is used to create and initialize objects. When you instantiate (create) an object using a constructor function, it sets up the object with predefined properties and methods.*/
var myarray = []; // empty array where we will push object.
function Person(p_name, p_age, p_email) {
  /* Person is a constructor function that create a new object with
     name, age, email properties. */
  this.name = p_name;
  this.age = p_age;
  this.email = p_email;
}
let person = new Person("vikas", 28, "vikas@gmail.com"); // new keyword is used to call the constructor
let person1 = new Person("tom", 25, "tom@gamil.com"); // function and create a new object instance.
myarray.push(person, person1);
console.log(myarray); // [ Person { name: 'vikas', age: 28 }, Person { name: 'tom', age: 25 } ]
//In this example, Person is a constructor function that takes name and age parameters and assigns them to the name and age properties of the object created with it. When you create instances of Person using new, it creates new objects with their own name and age properties.

// Constructor function for creating a Person object
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Creating instances of the Person object using the constructor function
var prson1 = new Person("John", 30);
var person2 = new Person("Alice", 25);

console.log(prson1.name, prson1.age); // Output: John 30
console.log(person2.age); // Output: 25
