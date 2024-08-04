// Global scope :- we can access varible anywhere (globally) and in local scope also.
// Local scope :- we can not access variabe out of the function.
// but we can access varible from global scope in local scope. and not access local to globally.


var firstName = "vikas"; // variable globally declared.
function displayName() {
  var lastName = "dhyani";
  function dispalyFullName() {
    console.log(firstName, lastName); // child function local scope ,it will print both names.
  }
  dispalyFullName();
  console.log(firstName, lastName); // This is local scope(function scope) here is both firstName and
  // lastName will be print.
}
displayName();
console.log(firstName, lastName); // Here is lastName is not defined (uncought error), because lastName
// is not in the global scope. Here is only firstName print.
