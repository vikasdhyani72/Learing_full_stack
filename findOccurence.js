// how many time 3 is there

const prompt = require("prompt-sync")();
let target = +prompt("enter the number : ");
let numbers = [1, 2, 3, 4, 3, 5, 3, 6, 3, 7, 3];
let count = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] == target) {
    count++;
  }
}
console.log(count);



let numbers1 = [1, 2, 3, 4, 3, 5, 3, 6, 3, 7, 3];
function findoccur(target) {
  let count = 0;
  for (let i = 0; i < numbers1.length; i++) {
    if (numbers1[i] == target) {
      count++;
    }
  }
  return count;
}
console.log(findoccur(3));
