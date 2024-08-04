function chunkArray(array, chunkSize) {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i = i + chunkSize) {
    // This for loop starts at index i = 0 and increments i by chunkSize after each iteration. It runs until i is less than the length of the array.
    chunkedArray.push(array.slice(i, i + chunkSize));
  } // Within each iteration, the slice method is used to create a chunk from the array.array.slice(i, i + chunkSize):i is the starting index. i + chunkSize is the ending index (non-inclusive).slice extracts a portion of the array from index i to i + chunkSize - 1. chunkedArray.push(...) adds this chunk to the chunkedArray.

  return chunkedArray;
}

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chunkSize = 3;
const result = chunkArray(myArray, chunkSize);
console.log(result); // Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
