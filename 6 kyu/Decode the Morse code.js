//MORSE_CODE[] is a library that you can use built into the codewars.

decodeMorse = function (morseCode) {
  morseCode = morseCode.split("   ");
  out = morseCode.map((word) =>
    word
      .split(" ")
      .map((char) => MORSE_CODE[char].join(""))
      .join("")
      .trim()
  );
  return out;
};

//made my own without the library

// let codes = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..'];
// let alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// let decodeMorse = function (morseCode) {
//     if(morseCode == "...---...") return "SOS"
//     let words = morseCode.split("  ")
//     let output = '';
//     for (word in words) {
//         letters = words[word].split(" ");
//         for (letter in letters) {
//             for (code in codes) {
//                 if (letters[letter] == codes[code]) {
//                     output += alph[code];
//                     continue;
//                 }
//             }
//         }
//         if(word != words.length - 1){
//         output += " "
//         }
//     }

//     return output.toLocaleUpperCase() + " " + morseCode;
// }

// console.log(decodeMorse("... --- ..."))
