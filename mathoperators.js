/* 'Math' object in javascript provides mathematical functions,
   it is not a constructor, all its methods and properties are static.
   */
// 1. absolute:- Math.abs() convert negative to positive.
let num = -9;
console.log(Math.abs(num)); // 9 output

//2. Round():- give round figure integer number
let num1 = 99.5;
let num2 = 99.4;
console.log(Math.round(num1)); // 100
console.log(Math.round(num2)); // 99

//3. ceil() point ke baad kuch bhi number ho ye uper ka number dega
let num3 = 99.1;
console.log(Math.ceil(num3)); // 100

//4. floor() point ke baad koi sa bhi number ho ye neeche ka number dega
let num4 = 99.9;
console.log(Math.floor(num4)); // 99

//5.max() : find maximum number (it does not work with array)
//6.min() : find minimun number ( "  "    "   "    "     "  )
console.log(
  Math.max(33, 4, 2, 22, 5, 24, 34, 2352, 2324, 23, 23524, 3, 52, 3423)
); // maximum number
console.log(
  Math.min(33, 4, 2, 22, 5, 24, 34, 2352, 2324, 23, 23524, 3, 52, 3423)
); // minimum number

//7.Math.rondom() : generate random number between 0 to 1  (0 < 1)
console.log(Math.random() * 100); // now it will generate number 0 to 100 (0 < 100)
console.log(Math.random() * 100 + 1); // now it will generate number 1 to 100

//8.toFixed()
let num5 = Math.PI;
console.log(num5); //  PI :- 3.141592653589793
console.log(num5.toFixed(2)); // 3.14 (. ke baad kitne number chahiye)

//9. toPrcision()
let num6 = Math.PI;
console.log(num6.toPrecision(4)); // 3.142 ( total number count)

//10. toLocalString()
let num7 = 10000000000000000;
console.log(num7.toLocaleString("en-IN")); // 10,00,00,00,00,00,00,000
console.log(num7.toLocaleString("en-US")); // 10,000,000,000,000,000
  
//11. squareRoot(value)
console.log(Math.sqrt(64)); // 8