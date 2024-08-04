/*Differences:

Parameter Passing:
call and apply pass arguments individually and as an array respectively.
bind creates a new function with preset arguments.

Immediate Invocation:
call and apply invoke/call the function immediately.
bind creates a new function that needs to be invoked separately.

Return Value:
call and apply return the result of the function.
bind returns a new function with a bound context and arguments.
*/

// bind :- bind mehtod is used to borrow a method from another object

const person = {
  firstName: "vikas",
  lastName: "dhyani",
  fullName: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};
const memeber = {
  firstName: "peter",
  lastName: "parker",
};

person.fullName(); // output vikas dhyani

let fullMemberName = person.fullName.bind(memeber);
fullMemberName(); // output peter parker

///////////////or//////////////////////
const myObject = {
  value: 10,
  getValue: function () {
    return this.value;
  },
};
const getValue = myObject.getValue;
const boundGetValue = getValue.bind(myObject);

console.log(getValue()); // undefined, because 'this' refers to global scope
console.log(boundGetValue()); // 10, because 'this' is now bound to myObject

//////////////or//////////////////
let user = {
  firstName: "johny",
  lastName: "sins",
};
function func() {
  console.log(this.firstName + " " + this.lastName);
}
let funcUser = func.bind(user);
funcUser();
/////////////////////////////////

// call
let person1 = {
  fullName: function () {
    return this.f1Name + " " + this.l1Name;
  },
};
let person2 = {
  f1Name: "vikas",
  l1Name: "dhyani",
};
let person3 = {
  f1Name: "kallu",
  l1Name: "singh",
};
console.log(person1.fullName.call(person2));
console.log(person1.fullName.call(person3));

/////////////or////////////////////
let name = {
  firstName: "johny",
  lastName: "sins",
  fullName: function (city, country) {
    console.log(
      `${this.firstName} ${this.lastName} lives in ${city} ${country}`
    );
  },
};
let name1 = {
  firstName: "mia",
  lastName: "khalifa",
};
name.fullName.call(name1, "london", "uk");
name.fullName.call(name, "california", "USA");

//apply
let name2 = {
  firstName: "johny",
  lastName: "sins",
  fullName: function (city, country) {
    console.log(
      `${this.firstName} ${this.lastName} lives in ${city} ${country}`
    );
  },
};
let name3 = {
  firstName: "mia",
  lastName: "khalifa",
};
name2.fullName.call(name2, "london", "uk"); // call
name2.fullName.apply(name3, ["california", "USA"]); //  in apply (we will pass an argument as an array)

/* bind retuns a method 
           and call and apply returs a value */

/*JavaScript में call, bind, और apply तीन महत्वपूर्ण विधियाँ (methods) हैं जो आपको फ़ंक्शन का संदर्भ (context) बदलने और उसे तुरंत या बाद में कॉल करने की अनुमति देती हैं। इनका उपयोग मुख्य रूप से फ़ंक्शंस के संदर्भ (this) को नियंत्रित करने के लिए किया जाता है।

1. call() Method
call मेथड का उपयोग किसी अन्य ऑब्जेक्ट के साथ एक फ़ंक्शन को तुरंत कॉल करने के लिए किया जाता है।

example:
*/

function greet() {
  console.log(`Hello, ${this.name}`);
}

const personYes = { name: "John" };

greet.call(personYes); // Output: Hello, John
//यहाँ, call मेथड greet फ़ंक्शन को person ऑब्जेक्ट के संदर्भ में कॉल करता है।

/*
2. apply() Method
apply मेथड भी call की तरह ही काम करता है, लेकिन यह आर्गुमेंट्स को एक एरे (array) के रूप में लेता है।

example:
*/

function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const personn = { name: "John" };

greet.apply(personn, ["Hello", "!"]); // Output: Hello, John!
// यहाँ, apply मेथड greet फ़ंक्शन को person ऑब्जेक्ट के संदर्भ में कॉल करता है और आर्गुमेंट्स को एक एरे के रूप में पास करता है।

// 3. bind() Method
// bind मेथड एक नया फ़ंक्शन बनाता है जिसका this वैल्यू निश्चित होती है। यह फ़ंक्शन को तुरंत कॉल नहीं करता, बल्कि उसे बाद में कॉल करने के लिए तैयार करता है।

// example:

function greet() {
  console.log(`Hello, ${this.name}`);
}

const personOne = { name: "John" };

const boundGreet = greet.bind(personOne);
boundGreet(); // Output: Hello, John
// यहाँ, bind मेथड एक नया फ़ंक्शन boundGreet बनाता है जिसका this वैल्यू person ऑब्जेक्ट है।

// इन तीनों मेथड्स का उपयोग करके, आप आसानी से फ़ंक्शन के संदर्भ को नियंत्रित कर सकते हैं और उसे विभिन्न संदर्भों में पुनः उपयोग कर सकते हैं।
//
