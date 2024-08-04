/* iterable where we use 'for of' loop 
ex - strings, array, sets
objects are not iterable
*/
//string
let myName = "vikas dhyani";
for (let characters of myName) {
  console.log(characters);
}

// array
let heroes = ["thor", "ironman", "hulk", "spiderman"];
for (let name of heroes) {
  console.log(name);
}

// set
let items = new Set(["item1", "item2", "item3", "item4"]);
for (let item of items) {
  console.log(item);
}

/*
Array like objects -
jinke paas length property hoti hai
aur jinko hum index se access kar sakte hai
ex - string
 */
let yourName = "CaptainAmerica";
console.log(yourName.length);
