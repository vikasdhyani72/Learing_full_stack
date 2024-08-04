const numbers = [2, 3, 1, 44, 55, 32, 12];
// Sort the array in ascending order
numbers.sort(function (a, b) {
  // this is formula to find the smallest number
  return a - b;
});
console.log(numbers[1]); // output 2

// or

function findSecondSmallest(arr) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b); // b - a for second largest
  return arr[1]; // Return the second element, which will be the second smallest number
}
const numbersarry = [2, 3, 1, 44, 55, 32, 12];
// Call the function and print the result
console.log("Second smallest number:", findSecondSmallest(numbersarry)); // Output: 2
