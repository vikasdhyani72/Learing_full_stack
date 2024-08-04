function largestNumber() {
  const num1 = 10;
  const num2 = 25;
  const num3 = 15;
  let largestNum;

  if (num1 >= num2 && num1 >= num3) {
    largestNum = num1;
  } else if (num2 >= num1 && num2 >= num3) {
    largestNum = num2;
  } else {
    largestNum = num3;
  }
  return largestNum;
}
console.log(largestNumber());
//console.log(`largest number is = ${largestNum}`); // without function
