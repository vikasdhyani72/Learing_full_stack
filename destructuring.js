//We may have an array or object that we are working with, but we only need some of the items contained in these.

//Destructuring makes it easy to extract only what is needed.

// Destructuring arrays:

const vehicles = ["mustang", "f-150", "expedition"];

const [car, , suv] = vehicles;

function calculate(a, b) {
  const addition = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [addition, subtract, multiply, divide];
}

const [addition, subtract, multiply, divide] = calculate(4, 7);







let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// no need this
// let a = arr[0];
// let b = arr[1];
//let [a, b] = arr; // this is destructuring
let [a, b, ...rest] = arr;
console.log(a, b, rest); // 1 2 [ 3, 4, 5, 6, 7, 8 ]

let { x, y } = { x: 1, y: 3 };
console.log(x, y);

// spread operator unke uper lgte hai jinhe iterate kiya ja sake ya loop kiya ja sake
let arr1 = [1, 2, 3, 4];
let obj1 = { ...arr1 };
console.log(obj1); // { '0': 1, '1': 2, '2': 3, '3': 4 }

let nums = [10, 20, 30, 41];
let add = sum(...nums);
console.log(add); // 101

let arr2 = [1, 2, 3, 4];
let obj2 = { ...arr2 };
//console.log(obj2);
function sum(v1, v2, v3, v4) {
  return v1 + v2 + v3 + v4;
}
console.log(sum(...arr2));

let obj = {
  name: "vikas",
  company: "company xyz",
  address: "XYZ",
};
console.log({ ...obj, name: "johny" }); // { name: 'johny', company: 'company xyz', address: 'XYZ' }
console.log({ name: "johny", ...obj }); //obj will print as it is without any changing

let obj3 = new Map();
obj3.set("IN", "INDIA");
obj3.set("US", "UNITED STATE");
obj3.set("UK", "UNITED KINGDOM");
obj3.set("AUS", "AUSTRALIA");
//console.log(obj3);
for (const [keys, value] of obj3) {
  // array destructring
  console.log(keys + "=>" + value);
}

// destructuring object and nested object

let user = {
  firstName: "vikas",
  lastName: "dhyani",
  age: 26,
  books: {
    book1: true,
    book2: true,
  },
};
let {
  firstName,
  lastName,
  age,
  books: { book1, book2 },
} = user;
console.log(age, firstName, lastName, book1, book2);

// destructuring arrays and nested array

let array = ["ram", "syam", "gopi", ["kanha", "sambhu"]];
let [zero, one, two, [three, four]] = array;
console.log(three);

/////////////////////////////////////////////////////////

function numarr(...arr) {
  console.log(arr);
}
numarr(1, 2, 3, 4, 5, 6, 7); // (7) [1, 2, 3, 4, 5, 6, 7]

function numarr() {
  console.log(arguments);
}
numarr(1, 2, 3, 4, 5, 6, 7); // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 6, '6': 7 }
