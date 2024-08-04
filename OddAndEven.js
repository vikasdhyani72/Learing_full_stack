let arr = [124, 343, 334, 23, 563, 46, 344, 390, 445, 433, 654, 554];
let odd = [];
let even = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    odd.push(arr[i]);
  }
  if (arr[i] % 2 == 0) {
    even.push(arr[i]);
  }
}
console.log(`odd numbers in the array => ${odd}`);
console.log(`even numbers in the array => ${even}`);

//sum of odd and even      if else..if
let nums1 = [1, 2, 3, 10, 20, 30];
oddsum = 0;
evensum = 0;
for (let i = 0; i < nums1.length; i++) {
  if (nums1[i] % 2 == 0) {
    evensum += nums1[i];
  } else if (nums1[i] % 2 != 0) {
    oddsum += nums1[i];
  }
}
console.log(oddsum);
console.log(evensum);
// ####################### OR ########################### if else
let nums = [1, 2, 3, 10, 20, 30];
oddsum = 0;
evensum = 0;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 == 0) {
    evensum += nums[i];
  } else {
    oddsum += nums[i];
  }
}
console.log(oddsum);
console.log(evensum);

// for..of loop
let num = [1, 2, 3, 10, 20, 30];
oddsum = 0;
evensum = 0;
for (let i of num) {
  if (i % 2 == 0) {
    evensum += i;
  } else {
    oddsum += i;
  }
}
console.log(evensum);
console.log(oddsum);
