const prompt = require("prompt-sync")();
let table = +prompt("enter the number : ");
for (let i = 1; i <= 10; i++) {
  result = table * i;
  console.log(`${table} x ${i} = ${result}`);
}

let number = 4;
function table(number) {
  for (let i = 1; i <= 10; i++) {
    console.log(number * i);
  }
}
table(number);
