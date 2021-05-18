// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.
let alph = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
function high(x) {
  x = x.split(" ");
  vals = [];
  for (word of x) {
    let total = 0;
    for (let i = 0; i < word.length; i++) {
      total += alph.indexOf(word[i]) + 1;
    }
    word = total;
    vals.push(word);
  }

  let max = 0;
  for (val of vals) {
    if (val > max) max = val;
  }
  return x[vals.indexOf(max)];
}
console.log(high("man i need a taxi up to ubud"));
console.log(high("what time are we climbing up the volcano"));
console.log(high("take me to semynak"));
console.log(high("aa b"));
console.log(high("b aa"));
console.log(high("bb d"));
console.log(high("d bb"));
console.log(high("aaa b"));

// function high(x) {
//   x = x.split(" ");
//   vals = [];
//   let max = 0;
//   let index = 0;
//   for (let word = 0; word < x.length; word++) {
//     let total = 0;
//     for (let i = 0; i < x[word].length; i++) {
//       total += alph.indexOf(x[word][i]) + 1;
//     }
//     if (total > max) {
//       max = total;
//       index = word;
//     }
//     console.log(index);
//   }
//   return x[index];
// }
