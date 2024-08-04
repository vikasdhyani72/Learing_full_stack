var name;
console.log(name);
console.log(typeof name);

var x = null;
console.log(x);
console.log(typeof x);

var x = "";
console.log(x);
console.log(typeof x);

/*In JavaScript, null and undefined are both primitive values that represent absence of meaningful value.
 While they are often used interchangeably to denote absence or lack of a value, 
 they have slightly different meanings.
 */
console.log(null == undefined); // Output: true
console.log(null === undefined); // Output: false

console.log(null == undefined); //true
//  Here, null and undefned are considered loosely equal because
//  both represent absence of value in JavaScript. When using the
//  operator, JavaScript performs type coercion, converting both null
//  and undefned to a common type (in this case, both are treated as
//  equal when converted to null), so the comparison returns true.

console.log(null === undefined); //false
//  In this case,  checks strict equality, meaning it compares
//  both the value and the type. Since null and undefned are of
//  different types (null is an object and undefned is of type
//  undefned), the comparison returns false.
