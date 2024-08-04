/* oop (object oriented program)
 (Object-Oriented Programming - OOP)
 Object-Oriented Programming (OOP) is a programming paradigm centered around the concept of "objects." Objects are instances of classes, which are blueprints that define the structure and behavior of data. OOP focuses on using these objects to design and build software applications. Here are the key concepts and components of OOP:
 (OOP) एक प्रोग्रामिंग पद्धति है जिसमें डेटा और इसके संचालन को वस्तुओं (Objects) के रूप में व्यवस्थित किया जाता है। OOP का मुख्य उद्देश्य कोड को पुन: प्रयोज्य (Reusable), लचीला (Flexible), और बनाए रखने में आसान (Maintainable) बनाना है। आइए इसे विस्तार से समझते हैं:

मुख्य अवधारणाएं (Main Concepts)
वस्तु (Object): An instance of a class. It represents a specific implementation of the class with actual values.
वस्तु डेटा और कार्यों (Methods) का संयोजन है। उदाहरण के लिए, एक कार एक वस्तु हो सकती है जिसमें गुण (Properties) जैसे रंग, मॉडल, और विधियाँ (Methods) जैसे ड्राइव करना, ब्रेक लगाना शामिल हैं।

वर्ग (Class): Class: A blueprint for creating objects. It defines a type and includes properties (attributes) and behaviors (methods).
वर्ग वस्तुओं के लिए खाका (Blueprint) होता है। यह गुणों और विधियों की परिभाषा करता है, लेकिन स्वयं में वास्तविक डेटा नहीं होता। उदाहरण के लिए, 'कार' एक वर्ग हो सकता है।

संघटन (Encapsulation):Encapsulation is the bundling of data (attributes) and methods (functions) that operate on the data into a single unit or class.
संघटन डेटा और विधियों को एक इकाई में बांधता है। इससे डेटा को बाहरी हस्तक्षेप से सुरक्षित किया जाता है और केवल निर्धारित विधियों के माध्यम से ही एक्सेस किया जा सकता है।

विरासत (Inheritance):Inheritance allows a class (called a subclass or derived class) to inherit attributes and methods from another class (called a superclass or base class).
This promotes code reuse and establishes a relationship between classes.
विरासत एक वर्ग की विशेषताओं और विधियों को दूसरे वर्ग में प्राप्त करने की क्षमता है। उदाहरण के लिए, 'इलेक्ट्रिक कार' 'कार' वर्ग से विरासत प्राप्त कर सकती है और अतिरिक्त गुण जोड़ सकती है।

बहुरूपता (Polymorphism):
बहुरूपता का मतलब है कि एक विधि का एक से अधिक तरीकों से उपयोग किया जा सकता है। उदाहरण के लिए, एक 'ड्राइव' विधि विभिन्न प्रकार की कारों के लिए अलग-अलग तरीके से कार्य कर सकती है।
अवधारण (Abstraction):

अवधारण जटिलता को छिपाने की प्रक्रिया है। यह केवल आवश्यक जानकारी को ही उजागर करता है और गैर-जरूरी विवरण छिपाता है। उदाहरण के लिए, ड्राइविंग करते समय हमें इंजन के आंतरिक कार्यों की जानकारी नहीं होती, केवल स्टियरिंग, एक्सीलेरेटर आदि का उपयोग करना होता है।
निष्कर्ष :
वस्तु-उन्मुख प्रोग्रामिंग को अपनाने से कोड अधिक संरचित, मॉड्यूलर और पुन: प्रयोज्य बनता है। OOP की अवधारणाओं का सही उपयोग करके, जटिल समस्याओं को हल करना और बड़े सॉफ़्टवेयर सिस्टम विकसित करना आसान हो जाता है।
*/
// class :- class is a blueprint or a user define datatype

class hello {
  constructor() {
    console.log("constructor function");
  }
}
let a = new hello();
let b = new hello();

/////////////////////////////////////////////

class HotelStructure {
  constructor(name, floors, color) {
    this.name = name;
    this.floors = floors;
    this.color = color;
  }
  displayMessage() {
    console.log(
      `${this.name} has ${this.floors} floors and with color ${this.color}`
    );
  }
}
//object
let delhiHotel = new HotelStructure("delhi hotel", "20", "blue");
let mumbaiHotel = new HotelStructure("mumbai hotel", "25", "brown");
delhiHotel.displayMessage();
mumbaiHotel.displayMessage();

//////////////////////////////////////////////////////////////

class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  makeSound() {
    console.log("Some generic sound...");
  }
}

// Creating an instance of the Animal class
let dog = new Animal("Buddy", "Dog");

console.log(dog.name); // Output: Buddy
console.log(dog.species); // Output: Dog
dog.makeSound(); // Output: Some generic sound...

/*
. We define a class called 'Animal' using the 'class' keyword.
. The 'constructor' method is a special method for creating and initializing objects created with a class.
It's executed automatically when a new instance of the class is created.
. The 'makeSound' method is a regular method defined within the class.
*/
// JavaScript classes can also have inheritance. You can extend one class from another using the extends keyword.
class Dog extends Animal {
  constructor(name, breed) {
    super(name, "Dog");
    this.breed = breed;
  }

  makeSound() {
    console.log("Woof!");
  }
}

let myDog = new Dog("Max", "Labrador");
console.log(myDog.name); // Output: Max
console.log(myDog.species); // Output: Dog
console.log(myDog.breed); // Output: Labrador
myDog.makeSound(); // Output: Woof!
// In this example, Dog is a subclass of Animal. It inherits the properties and methods of the Animal class and also has its own properties and methods.

// class calculator:-
class Calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }
  add() {
    return this.num1 + this.num2;
  }
  sub() {
    return this.num1 - this.num2;
  }
  mul() {
    return this.num1 * this.num2;
  }
  div() {
    return this.num1 / this.num2;
  }
}
let c1 = new Calculator(10, 12);
console.log(c1.add());
console.log(c1.sub());
console.log(c1.mul());
console.log(c1.div());
/*
1.Class Definition (Calculator):
The code starts with a class definition named Calculator.
Inside this class, there's a constructor method which initializes two properties num1 and num2 with the values passed to the constructor.

2.Constructor Method:
The constructor method takes two parameters, num1 and num2, and assigns them to the properties this.num1 and this.num2 respectively.

3.Instance Methods (add, sub, mul, div):
Following the constructor, there are four instance methods defined within the class: add, sub, mul, and div.
add method returns the sum of num1 and num2.
sub method returns the difference between num1 and num2.
mul method returns the product of num1 and num2.
div method returns the division result of num1 by num2.

4.Instantiation and Method Invocation:
After defining the Calculator class, an instance of Calculator is created using the new keyword with values 10 and 12 passed as arguments.
This instance is assigned to the variable c1.
Then, the add, sub, mul, and div methods of the c1 object are invoked using console.log() to print out the results.
*/
