var myAtoi = function (s) {
  
  let out = s.trim().split(" ")
  const big = 2 ** 31 - 1;
  let arr = []

  out = out.filter(i => i !== ' ')[0]
  
  if (out[0] === "+" && out[1] === '-') return 0 
  if (out[0] === "-" && out[1] === '+') return 0 
  
  let neg = out[0] === "-" ? "-" : "";
  let pos = out[0] === '+' ? "+" : "";


  let i = neg ? 1 : pos ? 1 : 0;

  loop: for (i; i < out.length; i++) {
    if (isNaN(out[i])) {
      break loop;
    }
    arr.push(out[i]);
  }

  out = Number(arr.join(""));

  if (out) {
    if (out > big) {
      return neg ? neg + (big + 1) : big;
    }
    return Number(neg + out);
  }

  return 0;
};

console.log(myAtoi("  +1  ++88827   5655  U"));
