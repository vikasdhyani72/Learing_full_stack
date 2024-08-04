//****************** addition ********************** */

function addnums(a, b) {
  var sum = a + b;
  return sum;
}
var result = addnums(5, 6);
console.log(result);

//***************** subtraction ********************* */

function subnum(a, b) {
  return a - b;
}
console.log(subnum(8, 5));

//****************** remainder ********************** */
function remainder(a, b) {
  return a % b;
}
console.log(remainder(8, 5));

function calculation(num1, num2) {
  var cacl1 = num1 + num2;
  console.log(cacl1);
  var calc2 = num1 - num2;
  console.log(calc2);
  var calc3 = num1 * num2;
  console.log(calc3);
  var calc4 = num1 / num2;
  console.log(calc4);
}
calculation(8, 5);
//////////////////////////////////////////////////
function calc(a, b) {
  const add = a + b;
  const sub = a - b;
  const mul = a * b;
  const div = a / b;
  return [add, sub, mul, div];
}
console.log(calc(4, 5)); //[ 9, -1, 20, 0.8 ]

//////////////////////////////////////////

function calc(a, b) {
  const add = a + b;
  const sub = a - b;
  const mul = a * b;
  const div = a / b;
  return [add, sub, mul, div];
}
const [add, sub, mul, div] = calc(4, 5);
console.log(add);
console.log(mul);
console.log(div);
console.log(sub);

/////////////////////////////////////////////////////////////

function calculation(num1, sign, num2) {
  var result;
  if (sign == "+") {
    result = num1 + num2;
  } else if (sign == "-") {
    result = num1 - num2;
  } else if (sign == "*") {
    result = num1 * num2;
  } else if (sign == "/") {
    result = num1 / num2;
  }
  return result;
}
console.log(calculation(4, "+", 6));
