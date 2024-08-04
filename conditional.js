// true and false
/* values of true => true, any number accept 0, string("name").
   values of false => false, null, undefined, zero(0), empty string(""). */

var fivestar;
fivestar = false;
//console.log("five star");
if (fivestar) {
  console.log("five star");
} else {
  console.log("no, fivestar");
}

var product = "dairymilk";
if (product == "fivestar") {
  console.log("five star liyana");
} else if (product == "dairymilk") {
  console.log("dairymilk liyana");
} else {
  console.log("kuch mat lana");
}
//////////////////////////
//switch case

let day = 8;
switch (day) {
  case 0:
    console.log("today is sunday");

    break;
  case 1:
    console.log("today is monday");

    break;
  case 2:
    console.log("today is tuesday");

    break;
  case 3:
    console.log("today is wednesday");

    break;
  case 4:
    console.log("today is thursday");

    break;
  case 5:
    console.log("today is friday");

    break;
  case 6:
    console.log("today is saturday");

  default:
    console.log("enter a valid week day");
    break;
}
