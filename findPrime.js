/* 
prime number :- prime number is only divisible by 1 and itself
ex : 7 = 1,2,3,4,5,6,7 its a prime number
     6 = 1,2,3,4,5,6 its not a prime number because 2 and 3 is divisible by 6

     how to find a prime number */

function isprime(number) {
  if (number <= 1) {
    // this if statement is for negative value
    return false;
  }
  for (let i = 2; i < number - 1; i++) {
    // i = 2  because 0 and 1 is also prime so it is start with 2
    if (number % 2 == 0) {
      return false;
    }
    return true;
  }
}
console.log(isprime(6));
