function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
let factorialOfNums = factorial(5); //adding new print again to push
console.log(factorialOfNums); //printing factorial of numbers
