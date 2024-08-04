/*
Leap year ek aisa saal hota hai jo 4 se poora bata(divide) ja sakta hai, lekin yadi saal 100 se bhi poora bata ja sakta hai to vah leap year nahi hota, parantu agar saal 400 se poora bata ja sakta hai to vah fir se leap year hota hai. Iska arth hota hai ki aam taur par ek leap year mein 365 din nahi balki 366 din hote hain. Isme February mahine mein ek extra din hota hai, jo ki 29 din ka hota hai, jabki normal saal mein February mahine mein sirf 28 din hote hain. Leap year ka concept surya varsh (solar year) ko saal varsh (calendar year) ke saath milaane mein madad karta hai, jo lagbhag 365.2422 din lamba hota hai. */
function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
}
console.log(isLeapYear(2022));

////////////////////////////////////////////////////////

function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true; // Leap year if divisible by 400
      } else {
        return false; // Not a leap year if divisible by 100 but not by 400
      }
    } else {
      return true; // Leap year if divisible by 4 but not by 100
    }
  } else {
    return false; // Not a leap year if not divisible by 4
  }
}

console.log(isLeapYear(2024)); // Output: true
