/* javascript object notation
 json.stingyfy() : it convert object to string
 json.parse() : it convert string to an object

 json is the format to exchange data same and different application
 
# json and javascript object difference :-
1. json has string key-value pairs "key" : "value"
object can be have or not           key  :  "value"

2. json does not store function and undifined value, 
but if json object has array and there is undefined value so json convert undefined into null .
object can have function
*/

let mydata = {
  name: "vikas",
  age: 26,
  email: "vd@gmail.com",
  books: ["book1", "book2", undefined, "book4"],
  displayName: function () {
    console.log(this.name);
    console.log(this.books);
  },
};
console.log(mydata);
let stringy = JSON.stringify(mydata);
console.log(stringy);
console.log(typeof stringy);
// json.parse()
let parse = JSON.parse(stringy);
console.log(parse);
console.log(typeof parse);
