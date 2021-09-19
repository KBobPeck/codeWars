"use strict";



// // const alpha = "abcdefghijkmnlopqrstuvwxyz";
// function lastSurvivor(str) {
//   const getLetter = function (letter) {
//     if (letter === "z") {
//       return "a";
//     }
//     return alpha[alpha.indexOf(letter) + 1];
//   };
//   let string = [...str];
//   let i = 0;
//   let j = 0;
//   for (i in string) {
//     console.log(string);
//     let currentLetter = string[i];
//     for (j in string) {
//       let nextLetter = string[j++];
//       console.log(currentLetter, "current");
//       console.log(nextLetter, "next");
//       if (string.indexOf(currentLetter, nextLetter) !== -1) {
//         string.splice(0, 1);
//         i = 0;
//         j = 0;
//         break;
//       }
//     }
//   }
//   console.log(string.join(""));
// }

// const alpha = "abcdefghijkmnlopqrstuvwxyza";
// function lastSurvivor2(str) {
//   str = str.split("");
//   loop: for (let i = 0; i < str.length - 1; i++) {
//     for (let j = i + 1; j < str.length; j++) {
//       if (str[i] == str[j]) {
//         let temp = alpha.indexOf(str[i]);
//         str.splice(j, 1);
//         str.splice(i, 1);
//         str.push(alpha[temp + 1]);
//         console.log(str);
//         i = 0;
//         j = 0;
//       }
//     }
//   }
//   console.log(str);
// }

// lastSurvivor2("aaaba");
// //ca


// // likes [] -- must be "no one likes this"
// // likes ["Peter"] -- must be "Peter likes this"
// // likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
// // likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
// // likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"


// function likes(names) {
//   if(names.length == 0){
//       return "no one likes this"
//   }else if(names.length == 1){
//       return `${names[0]} likes this`
//   }else if(names.length == 2){
//       return `${names[0]} and ${names[1]} like this`
//   }else if(names.length == 3){
//       return `${names[0]}, ${names[1]} and ${names[2]} like this`
//   }else{
//       return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
//   }
// }