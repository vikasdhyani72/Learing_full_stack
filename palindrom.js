const prompt = require("prompt-sync")();
let revword = prompt("check the word :");
let word = revword.split("").reverse().join("");
if (revword == word) {
  console.log(`${word} is a palindrom`);
} else {
  console.log(`${word} is not a palindrom`);
}

function isPalindrom(str) {
  let word = str.split("").reverse().join("");
  if (word === str) {
    console.log(word + " " + "is palindrom");
  } else {
    console.log(word + " " + "is not palindrom");
  }
}
let check = isPalindrom("nitin");
console.log(check);

// number is palindrom or not
function isPalindrom(num) {
  let str = num.toString();
  let revNum = str.split("").reverse().join("");
  if (revNum === str) {
    console.log("number is palindrom");
  } else {
    console.log("number is not palidrom");
  }
}
let checkNum = isPalindrom(123321);
console.log(checkNum);
