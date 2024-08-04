/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class, and the properties are assigned inside a constructor() method.

class Car {
  constructor(name) {
    this.brand = name;
  }
}

const mycar = new Car("Ford");
//note:-The constructor function is called automatically when the object is initialized.

/////////////////////************************************ */

//Method in Classes:=
//You can add your own methods in a class:

//Create a method named "present":

class Car {
  constructor(name) {
    this.brand = name;
  }

  present() {
    return "I have a " + this.brand;
  }
}

const mycar1 = new Car("Ford");
mycar1.present();

/////////////////////************************************ */

//Class Inheritance:=
//To create a class inheritance, use the extends keyword.

//A class created with a class inheritance inherits all the methods from another class:

class Car {
  constructor(name) {
    this.brand = name;
  }

  present() {
    return "I have a " + this.brand;
  }
}

class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }
  show() {
    return this.present() + ", it is a " + this.model;
  }
}
const mycar2 = new Model("Ford", "Mustang");
mycar2.show();
//The super() method refers to the parent class.

//By calling the super() method in the constructor method, we call the parent's constructor method and get access to the parent's properties and methods.

/////////////////////************************************ */

class Person {
  constructor(name, age) {
    //Constructor Method: The constructor method is a special method used to initialize new objects. When you create a new Person, you pass name and age as arguments, which are then assigned to the instance properties this.name and this.age.
    this.name = name;
    this.age = age;
  }

  greet() {
    // Instance Method: The greet method is a regular method defined inside the class. It can be called on any instance of the Person class and prints a greeting message to the console.
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}
const person1 = new Person("Alice", 30); // We use the new keyword to create new instances(example) of the Person class.
const person2 = new Person("Bob", 25);

person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
person2.greet(); // Output: Hello, my name is Bob and I am 25 years old.

//Inheritance
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); // Calls the constructor of the parent class
    this.jobTitle = jobTitle;
  }

  describeJob() {
    console.log(`I am a ${this.jobTitle}.`);
  }
}

const employee1 = new Employee("Carol", 28, "Software Engineer");
employee1.greet(); // Output: Hello, my name is Carol and I am 28 years old.
employee1.describeJob(); // Output: I am a Software Engineer.

// getter and setter

class Rectangle {
  // Constructor: The Rectangle class has a constructor that initializes width and height properties.
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    // Getter: The get area method is a getter that computes and returns the area of the rectangle (width * height). It allows you to access the area as if it were a property (rect.area).

    return this.width + this.height;
  }

  set area(value) {
    // Setter: The set area method is a setter that logs a message when you try to set the area. It effectively makes the area read-only.
    console.log("Area is read-only");
  }
}

//Using Getters and Setters: We create a Rectangle instance rect. When we access rect.area, the getter computes and returns the area. When we try to set rect.area, the setter logs a message indicating that the area is read-only.
const rect = new Rectangle(10, 5);
console.log(rect.area); // Output: 15
rect.area = 20; // Output: Area is read-only
