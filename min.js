let arr = [124, 343, 334, 23, 563, 46, 344, 390, 445, 433, 654, 554];
let min = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
}
console.log(min);
