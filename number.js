// Number data type
var num1 = 5; // ===>> integer
var num2 = 10.5; // ===>> float number
var num3 = "4"; // ===>> value is number but data type is string.
console.log(num1, num2, num3);
console.log(typeof num1, typeof num2, typeof num3); // ===> number number string

var newnum = parseInt(num2); // parseInt ===>> change float number into integer.
console.log(newnum);

var randomnumber = Math.random(); // Math is globaly available object and random is a method.
console.log(randomnumber); // ===>> generate random number between 0 to 1.
