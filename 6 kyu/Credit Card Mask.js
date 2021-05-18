// return masked string
function maskify(cc) {
  let input = cc.split("");
  //its an array
  for (let i = 0; i < input.length - 4; i++) {
    input[i] = "#";
  }
  return input.join("");
}

console.log(maskify("89 h894jm8oqmwejfopwe"));
