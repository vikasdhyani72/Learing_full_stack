// this set method gives you an new object
let array = [1, 2, 22, 7, 3, 4, 2, 5, 6, 7, 22, 3];
let uniqarr = new Set(array);
console.log(uniqarr); // Set(8) { 1, 2, 22, 7, 3, 4, 5, 6 }

// or
let array2 = [1, 2, 22, 7, 3, 4, 2, 5, 6, 7, 22, 3];
let newarray = [];
for (let i = 0; i < array2.length; i++) {
  if (!newarray.includes(array2[i])) {
    newarray.push(array2[i]);
  }
}
console.log(newarray);

//or
let array1 = [1, 2, 22, 7, 3, 4, 2, 5, 6, 7, 22, 3];
let newuniq = [];
function uniqarray(array1) {
  array1.forEach((number) => {
    if (!newuniq.includes(number)) {
      newuniq.push(number);
    }
  });
  return newuniq;
}
console.log(uniqarray(array1));
