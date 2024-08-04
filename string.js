// string data type
var str1 = "Hello vikas dhyani let's play.";
var str2 = 'Hello tom let\'s play.';
console.log(str1);
console.log(str2);

let mystr = "vikas dhyani";
// length = length of string
let strcount = mystr.length;
console.log(strcount); // 12

// toUpperCase = convert string into uper case and return
let strupr = mystr.toUpperCase();
console.log(strupr);

// toLowerCase = convert string into lower case and return
let str = "TOM AND JERRY";
let strlwr = str.toLowerCase();
console.log(strlwr);

// indexOf = search 'index no' of string character and return it
let str3 = "TOM AND JERRY";
let indNo = str3.indexOf("R");
console.log(indNo); // 10

// charAt = search 'character' of the string  and return it
let mystr1 = "TOM AND JERRY";
let indx = mystr1.charAt(6);
console.log(indx); // D

// lastIndex() = find last 'index no' of character and return it
let mystr2 = "TOM AND JERRY";
let lastindx = mystr2.lastIndexOf("R");
console.log(lastindx); // 11

// includes()= find the character and return in true or false.
let mystr3 = "TOM AND JERRY";
let include = mystr3.includes("RR")
console.log(include); // true 

// concat = concat two strings
let mystr4 = "tom and jerry";
let mystr5 = "ek bahut acha cartoon TV program hai"
let res = mystr4.concat(" " ,mystr5)
console.log(res);

// slice() = return a slice of piece in string
let mystr6 = "tom and jerry"
let res1 = mystr6.slice(4,8) //4 is index kaha se start krna hai aur 8 index ke beech
console.log(res1); // and 

// replace()= replace the word from the string to another
let mystr7 = "tom and jerry";
let res2 = mystr7.replace("tom", "oggy");
console.log(res2); // oggy and jerry

// substring()= it is also give slice of string
let mystr8 = "tom and jerry";
let res3 = mystr8.substring(4, 7); // 4 index se start and 7 index tak
console.log(res3); // and

// charCodeAt() = The charCodeAt() method in JavaScript returns the Unicode of the character at a specified index in a string.
const str4 = "Hello, World!";
const index = 7; // Index of 'W' in the string
const charCode = str4.charCodeAt(index); // ascci code of W is 87 
console.log(`The character code of '${str4[index]}' at index ${index} is ${charCode}`);
