// Loop :- In javascript , a loop is a control structure that allows you to execute a block of code
//         repeatedly for a specified number of iterations.
// to perform a repeatedly task and avoid repeated code.
// Infinite loop :-

// There are several types of loops in javascript:-
// these are the basic types of loops in javascript, and they can be used to perform a wide range of tasks.

// For loop :- A for loop is allow to execute a block of code repeatedely for a specified number of
//             iterations. it consists of an initialization statement(i=0;), a condition(i<10;), and
//             an increment(i++ or i=i+1) / decrement statement(i-- or i=i-1).

for (var i = 0; i <= 10; i = i + 1) {
  console.log(i);
}
// reverse for loop
for (let i = 10; i > 0; i = i - 1) {
  console.log(i); // reverse print
}

for (let i = 0; i < 5; i++) {
  if (i == 3) {
    break;
  }
  console.log(i); // 0,1,2 because i is not equal to 3
}
// The loop runs as long as i is less than 5.
// When i equals 3, the break statement is executed, terminating the loop immediately.
// The console.log(i) statement is executed only for i = 0, i = 1, and i = 2, resulting in the output 0, 1, and 2.

for (let i = 0; i < 5; i++) {
  if (i == 3) {
    continue; // The continue statement skips the rest of the loop body for this iteration, so console.log(i) is not executed.
  }
  console.log(i); // 0,1,2,4 because i is not equal to 3
}

//  while loop :- A while loop execute a block of code as long as a specified condition is true.

var x = 0;
while (x < 10) {
  console.log(x);
  x = x + 1;
}

var colorArray = [
  "red",
  "black",
  "white",
  "blue",
  "pink",
  "green",
  "yellow",
  "grey",
  "orange",
];
var i = 0;
while (i < colorArray.length) {
  console.log(i + "-" + colorArray[i]);
  i = i + 1;
}

// do..while loop :- A do..while loop is similar to a while loop. , but the block of code is executed
//                   at least once before the condition is checked.

var x = 0;
do {
  console.log(x);
  x = x + 1;
} while (x < 10);

// For..in loop :- A for..in loop iterates over the properties of an object and also an array.

var obj = {
  a: 1,
  b: 2,
  c: 3,
};
for (var key in obj) {
  console.log(key + "=" + obj[key]);
}

// For..of loop :- A for..of loop iterates over the values of an iterable object, such as an array or
//                 a string.

var arr = [1, 2, 3, 4, 5, 6];
for (var value of arr) {
  console.log(value);
}
