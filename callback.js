/* 
callback function :-  A callback function is a function that is passed as an argument to another function,
                      and is executed by the outer function at a later time. This allows for more flexibility 
                      and control over the flow of a program.
                      */
function candrive(age, pass, fail) {
  if (age >= 18) {
    pass();
  } else {
    fail();
  }
}
candrive(
  10,
  function () {
    console.log("you can drive"); // this is anonymous function is passed as a callback to the candrive
    // function.
  },
  function () {
    console.log("you can not drive");
  }
);

///////////////////////////////////////////////////

function candrive(age, pass, fail) {
  if (age >= 18) {
    pass();
  } else {
    fail();
  }
}
var drivePass = function () {
  console.log("you can drive");
};
var driveFail = function () {
  console.log("you can not drive");
};
candrive(10, drivePass, driveFail);

///////////////////////////////////////////////

function greet(name, callback) {
  console.log(`hello, ${name}!`);
  callback();
}
function farewell() {
  console.log("goodbye!");
}
greet("vikas", farewell);
