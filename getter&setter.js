/*  In JavaScript, set and get are function used as part of ES6's "getter" and "setter" syntax.
Getters and setters are functions used to access and modify the properties of an object in JavaScript. They allow for controlled access to object properties.
They are commonly used in object-oriented programming and are particularly useful when you need to add behavior to property access or modification. */
// getter means to access the value
// setter means change the value , in simple way
let personObj = {
  firstName: "vikas",
  lastName: "dhyani",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fName(firstName) {
    this.firstName = firstName;
  },
  set lName(lastName) {
    this.lastName = lastName;
  },
};
console.log(personObj.fullName);
personObj.fName = "johny";
personObj.lName = "sins";
console.log(personObj.fullName);

////////////////////////// or //////////////////////

let personObj1 = {
  firstName: "vikas",
  lastName: "dhyani",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(name) {
    // fullName setter that takes the full name as a parameter and splits it into first and last names.
    let [firstName, lastName] = name.split(" "); //
    this.firstName = firstName;
    this.lastName = lastName;
  },
};

console.log(personObj1.fullName); // Output: vikas dhyani
personObj1.fullName = "Johny Sins"; // Set full name using setter
console.log(personObj1.fullName); // Output: Johny Sins

class MyName {
  constructor(name) {
    this.name = name;
    console.log("this is called constructor");
  }
  set setname(name) {
    this.name = name;
  }
  get getname() {
    return this.name;
  }
}
let fullName = new MyName("vikas dhyani");
console.log(fullName.getname); // access the value (get the value)
fullName.setname = "johny sins";
console.log(fullName.getname); // change the value

/*In JavaScript, getters and setters are special methods that allow you to define how to access and mutate(change) the properties of an object. They provide a way to control the access to an object's properties, making it possible to encapsulate and protect data. Let's go through both concepts in detail:

Getter
A getter is a method that gets the value of a specific property. It allows you to execute a function when a property is accessed, providing a way to customize the retrieval of the property.

Syntax
To define a getter, you use the get keyword followed by the function:
*/
let obj = {
  _value: 1,
  get value() {
    return this._value;
  },
};

console.log(obj.value); // Output: 1
// In this example:
// _value is a private property (conventionally denoted by the underscore).
// get value() is a getter method that returns the value of _value.

// Setter :-
// A setter is a method that sets the value of a specific property. It allows you to execute a function when a property is assigned a value, providing a way to customize the setting of the property.
// To define a setter, you use the set keyword followed by the function:
let obj1 = {
  _value: 1,
  get value() {
    return this._value;
  },
  set value(newValue) {
    if (newValue > 0) {
      this._value = newValue;
    } else {
      console.log("Value must be positive");
    }
  },
};

obj1.value = 5;
console.log(obj1.value); // Output: 5

obj1.value = -3; // Output: Value must be positive
console.log(obj1.value); // Output: 5
// In this example:
// set value(newValue) is a setter method that sets the value of _value if the new value is positive. Otherwise, it logs a message to the console.

// Usage in Classes :-
// Getters and setters are often used in classes to control access to properties.
class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (newName.length > 0) {
      this._name = newName;
    } else {
      console.log("Name cannot be empty");
    }
  }
}

let person = new Person("Alice");
console.log(person.name); // Output: Alice

person.name = "Bob";
console.log(person.name); // Output: Bob

person.name = ""; // Output: Name cannot be empty
console.log(person.name); // Output: Bob
// In this class example:

// The getter method name returns the private _name property.
// The setter method name validates and sets the _name property.
// Summary
// Getter: A method to get the value of a property, defined using the get keyword.
// Setter: A method to set the value of a property, defined using the set keyword.
// Getters and setters encapsulate access to object properties, allowing for validation and controlled access.
// These methods help you create more robust and maintainable code by providing control over how properties are accessed and modified.
