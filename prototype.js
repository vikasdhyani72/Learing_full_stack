// prototype is an object that have properties and methods and also inherit properties and methods from the basic objects.

let employee = {
  tax: function () {
    console.log("tax rate is 10 %");
  },
};

let karanArjun = {
  salary: 50000,
  tax: function () {
    console.log("tax rate is 20 %");
  },
};
karanArjun.__proto__ = employee;
console.log(karanArjun.tax());



// Define a constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add a method to the prototype of Person
Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Create a new instance of Person
var person1 = new Person("johny", 30);

// Access properties and call the method
console.log(person1.name); // Output: johny
console.log(person1.age); // Output: 30
person1.sayHello(); // Output: Hello, my name is johny and I am 30 years old.

// You can also add properties directly to the prototype
Person.prototype.nationality = "Unknown";

// Access the added property
console.log(person1.nationality); // Output: Unknown

///////////////////////////////////////////////////////////////

let animal = {
  eatsNveg: false,
  walk() {
    console.log("animal can walk");
  },
};
let rabbit = {
  __proto__: animal,
};
rabbit.walk();
console.log(rabbit.eatsNveg);

////////////////////////////////////////////////////////////////

 