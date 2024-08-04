function findIntersection(arr1, arr2) {
  const set1 = new Set(arr1); // Create a set from arr1

  const intersection = [];

  for (let i = 0; i < arr2.length; i++) {
    if (set1.has(arr2[i])) {
      intersection.push(arr2[i]);
      set1.delete(arr2[i]); // Remove the element from set1 to handle duplicates
    }
  }

  return intersection;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8];
console.log(findIntersection(arr1, arr2));

///////////////////////////////////////<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>////////////////////////////

function findIntersection(arrOne, arrTwo) {
  const intersection = [];
  for (let i = 0; i < arrOne.length; i++) {
    for (let j = 0; j < arrTwo.length; j++) {
      if (arrOne[i] === arrTwo[j] && !intersection.includes(arrOne[i])) {
        intersection.push(arrOne[i]);
      }
    }
  }
  return intersection;
}

const arrOne = [1, 2, 3, 4, 5];
const arrTwo = [4, 5, 6, 7, 8];
console.log(findIntersection(arrOne, arrTwo));

////////    OR    ///////////

function intersectArrays(arr1, arr2) {
  return arr1.filter((element) => arr2.includes(element));
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const intersection = intersectArrays(array1, array2);

console.log(intersection); // Output: [3, 4, 5]
