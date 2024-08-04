let str = "hey congratulation to you";
let removeVowelsRegEx = /[aeiou]/gi; // regEx approach
let withoutVowels = str.replace(removeVowelsRegEx, ""); // Replace vowels with an empty string
console.log(withoutVowels);
