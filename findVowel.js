let word = "congratulations";
let vowel = ["a", "e", "i", "o", "u"];
let findvowelcount = 0;
word = word.split("");
for (let i = 0; i < word.length; i++) {
  if (vowel.includes(word[i])) {
    findvowelcount++
  }
}
console.log(findvowelcount);