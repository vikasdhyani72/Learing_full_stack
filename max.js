///////////////////////////////////////////////////
//  Traditional approach

let arr = [124, 343, 334, 23, 563, 46, 344, 390, 445, 433, 654, 554];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max);
////////////////////    OR(function)
function maxCount(nums) {
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  return max;
}
const nums = [-2, -1, -1, 1, 2, 3];
console.log(maxCount(nums));

// Optimized

function findMaxElement(arr) {
  if (arr.length === 0) {
    return "Empty Array";
  }
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMaxElement([3, 6, 8, 4, 5]));
