let arr = [124, 34, 334, 242, 56, 46, 344, 390, 474, 400, 654, 554];
let start = 0; // start is initialized to 0, representing the index of the first element.
let end = arr.length - 1; // representing the index of last element
while (start < end) {
  // The condition of the while loop is start < end. This ensures the loop runs until the start index is less than the end index.

  [arr[start], arr[end]] = [arr[end], arr[start]]; // Within the loop, the elements at the start and end indices are swapped using the destructuring assignment syntax [arr[start], arr[end]] = [arr[end], arr[start]].
  start++; // After swapping, start is incremented by 1, and end is decremented by 1.
  end--;
}
console.log(arr);

//                      or
let arr1 = [124, 343, 334, 23, 563, 46, 344, 390, 445, 433, 654, 554];
let res = arr1.reverse();
console.log(res);
