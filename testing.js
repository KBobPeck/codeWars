"use strict";
// const alpha = "abcdefghijkmnlopqrstuvwxyz";
function lastSurvivor(str) {
  const getLetter = function (letter) {
    if (letter === "z") {
      return "a";
    }
    return alpha[alpha.indexOf(letter) + 1];
  };
  let string = [...str];
  let i = 0;
  let j = 0;
  for (i in string) {
    console.log(string);
    let currentLetter = string[i];
    for (j in string) {
      let nextLetter = string[j++];
      console.log(currentLetter, "current");
      console.log(nextLetter, "next");
      if (string.indexOf(currentLetter, nextLetter) !== -1) {
        string.splice(0, 1);
        i = 0;
        j = 0;
        break;
      }
    }
  }
  console.log(string.join(""));
}

const alpha = "abcdefghijkmnlopqrstuvwxyza";
function lastSurvivor2(str) {
  str = str.split("");
  loop: for (let i = 0; i < str.length - 1; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] == str[j]) {
        let temp = alpha.indexOf(str[i]);
        str.splice(j, 1);
        str.splice(i, 1);
        str.push(alpha[temp + 1]);
        console.log(str);
        i = 0;
        j = 0;
      }
    }
  }
  console.log(str);
}

lastSurvivor2("aaaba");
//ca
