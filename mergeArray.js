let arr = [[124,343,334,23,563,46,344,390,445,433,654,554],[34,345,346,476,546,745,475,643]]
let newarr = []
for(let i = 0; i<arr.length; i++){
    for(let j = 0; j<arr[i].length; j++){
        newarr.push(arr[i][j])
   }
//newarr = arr[0].concat(arr[1])
//newarr= [...arr[0],...arr[1]]
}
console.log(newarr);

// spread operator
let number1 = [1,2,3,4,5,6]
let number2 = [11,22,33,44,55,]
let result = [...number1,...number2]
console.log(result)

// //**************************************************************************** */

let arr1 = [124, 343, 334, 23, 563, 46, 344, 390, 445, 433, 654, 554];
let arr2 = [34, 345, 346, 476, 546, 745, 475, 643];
let mergearr = [];
for (let i = 0; i < arr1.length; i++) {
  mergearr.push(arr1[i]);
}
for (let i = 0; i < arr2.length-4; i++) {
  mergearr.push(arr2[i]);
}
console.log(mergearr);

// ##################################################

function mergeArrays(arr1, arr2) {
  let mergedArray = [];

  // Push elements of arr1 into mergedArray
  for (let i = 0; i < arr1.length; i++) {
    mergedArray.push(arr1[i]);
  }

  // Push elements of arr2 into mergedArray
  for (let i = 0; i < arr2.length; i++) {
    mergedArray.push(arr2[i]);
  }

  return mergedArray;
}

let arr3 = [124, 343, 334, 23, 563, 46, 344, 390, 445, 433, 654, 554];
let arr4 = [34, 345, 346, 476, 546, 745, 475, 643];

let merged = mergeArrays(arr3, arr4);
console.log(merged);

// #################################################################

let arr5 = [124, 343, 334, 23, 563, 46, 344, 390, 445, 433, 654, 554];
let arr6 = [34, 345, 346, 476, 546, 745, 475, 643];

let mergedArray = [];

// Push elements of arr1 into mergedArray
for (let element of arr5) {
  mergedArray.push(element);
}

// Push elements of arr2 into mergedArray
for (let element of arr6) {
  mergedArray.push(element);
}

console.log(mergedArray);
