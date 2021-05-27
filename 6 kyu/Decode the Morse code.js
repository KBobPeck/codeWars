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
