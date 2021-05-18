function rgb(r, g, b) {
  let input = [r, g, b];
  let out = "";
  for (val of input) {
    val < 1
      ? (out += "00")
      : val < 16
      ? (out += 0 + "" + val.toString(16).toUpperCase())
      : val > 255
      ? (out += "FF")
      : (out += val.toString(16).toUpperCase());
  }
  return out;
}

console.log(rgb(0, 0, 0));
console.log(rgb(0, 255, 0));
console.log(rgb(300, 0, 0));
console.log(rgb(93, 97, 14));
