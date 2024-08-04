// fibonacci :-  The two first fibonacci numbers are 0 and 1, and the next fibonacci number is
//               always the sum of the previous two numbers.
//   so we get = 0,1,1,2,3,5,8,13,21,34,55,89.........so on.
let num1 = 0;
let num2 = 1;
let fibonacci;
for (let i = 0; i <= 8; i++) {
  console.log(num1);
  fibonacci = num1 + num2;
  num1 = num2;
  num2 = fibonacci;
}
// ************************ OR ********************************
var numberArr = [0, 1];
var newNumber = 0;
for (var i = 0; i <= 6; i++) {
  newNumber = numberArr[numberArr.length - 1] + numberArr[numberArr.length - 2];
  numberArr.push(newNumber);
}
console.log(numberArr);



function fibonaccci(num) {
  let num1 = 0;
  let num2 = 1;
  let sum;
  for (let i = 0; i <= num; i++) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
  }
  return num2;
}
console.log(fibonaccci(8));

function fibonacccci(num) {
  if (num == 1) return 0;
  if (num == 2) return 1;

  return fibonacccci(num - 1) + fibonacccci(num - 2);
}
console.log(fibonacccci(8));
