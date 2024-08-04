//setTimeout(): This method is used to execute a function once after a specified delay (in milliseconds). It takes two parameters: the function to be executed and the delay time
console.log("Statement 1");
setTimeout(function () {
  console.log("Statement 2");
}, 1000);
console.log("Statement 3");
//In this example, "Statement 1" and "Statement 3" will be executed immediately, while "Statement 2" will be executed after a delay of 1000 milliseconds. During the 1-second delay, other code can continue to execute.

//setInterval(): This method is used to repeatedly execute a function with a fixed time delay between each execution. It takes two parameters: the function to be executed and the time interval (in milliseconds)
function showTime() {
  let dateTime = new Date();
  let time = dateTime.toLocaleTimeString(); // toLocaleDateString() for current date
  console.log(time);
}
//showTime() //it shows current time only one
setInterval(showTime, 1000);

/*In JavaScript, you can use setTimeout and setInterval to execute code after a certain delay or at regular intervals, respectively. The main difference between them lies in how they handle the timing of the execution.

Here's how they work:

setTimeout:
setTimeout is used to execute a function once after a specified delay.
It takes two parameters: the function to be executed and the time delay in milliseconds.
After the specified delay, the function is executed once.

setTimeout is asynchronous function, it takes two arguments 'function' and 'time' in milli seconds, function you pass as an argument will execute after the time complete which you passed as the second argument, and this timer is run by javascript engine in background and it doesn't pause and other code, that's why we call setTimeout as asynchronous
Example:
*/
setTimeout(function () {
  console.log(
    "This message will be logged after 2000 milliseconds (2 seconds)."
  );
}, 2000);

/*setInterval:
setInterval is used to repeatedly execute a function at defined intervals.
It also takes two parameters: the function to be executed and the time interval in milliseconds.
The function will continue to execute at the specified interval until it is stopped.
Example:
*/
setInterval(function () {
  console.log(
    "This message will be logged every 3000 milliseconds (3 seconds)."
  );
}, 3000);

// clearTimeout():
//   In JavaScript, clearTimeout() is a method used to cancel a scheduled function execution set by setTimeout(). It clears the timer before the specified function gets a chance to execute, preventing its invocation.

function sayHello() {
  console.log("Hello, World!");
}

const timerId = setTimeout(sayHello, 1000); // Schedule sayHello function to run after 1000 milliseconds (1 second)

// Now, if you want to cancel the execution of the sayHello function before it runs:
clearTimeout(timerId);

// clearInterval():
// In JavaScript, clearInterval() is a method used to cancel a repetitive function execution set by setInterval(). It stops the repetitive invocation of the specified function at the specified intervals.
let count = 0;

function displayCount() {
  count++;
  console.log(`Count: ${count}`);
  if (count === 5) {
    clearInterval(intervalID);
    console.log("Interval stopped.");
  }
}

let intervalID = setInterval(displayCount, 1000);

/*
// setTimeOut and setInterval ex;

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      #anim {
        height: 150px;
        width: 150px;
        background-color: red;
      }
    </style>
  </head>
  <body>
    <div id="anim"></div>
    <button id="change">change animation</button>
    <script>
      let id = document.getElementById("anim");
      let btnEl = document.getElementById("change");

      // setTimeout=>

      btnEl.addEventListener("click", function () {
        setTimeout(() => {
          id.style.width = "1000px";
          id.style.backgroundColor = "blue";
        }, 500);
      });

      // setInterval=>

      let a = 0;
      setInterval(function anim() {
        a = a + 10;
        id.style.marginLeft = a + "px";
      }, 1000);
    </script>
  </body>
</html>

 */
