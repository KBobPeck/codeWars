function alphabetPosition(text) {
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
  text = text.toLowerCase().split("");
  answer = [];

  for (letter of text) {
    alph.indexOf(letter) != -1 && answer.push(alph.indexOf(letter) + 1);
  }
  return answer.join(" ");
}

console.log(alphabetPosition("abc d'e"));
