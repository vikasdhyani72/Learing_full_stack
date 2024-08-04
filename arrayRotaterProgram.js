let array = [1, 2, 3, 4, 5, 6, 7];
let k = 3; // 2 is how many element
let rotedPart = array.splice(-k) // splice(-3) means last 3 elements
array.unshift(...rotedPart) // unshift is last 3 elemnt shift in the beganing
console.log(array)
