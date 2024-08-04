function vowelCount(text) {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (
      text[i] == "a" ||
      text[i] == "e" ||
      text[i] == "i" ||
      text[i] == "o" ||
      text[i] == "u"
    ) {
      count = count + 1;
    }
  }
  return count;
}
let text = "vikas is so dumb guy";
console.log(vowelCount(text));

///////////////////////////////////////////
function countVowels(str) {
  let count = 0;
  for (let char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("heeeello world"));

//////////////////////////////////////////////////////////////////////

function vowelCount(str) {
  let word = str.split("");
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      count++;
    }
  }

  return count;
}
let result = vowelCount("hello this is vikas");
console.log(result);
