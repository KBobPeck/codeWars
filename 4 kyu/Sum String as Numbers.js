// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

//! ATTEMPT 1
/*
  return String(+a + +b);
*/

//!ATTEMPT 2
/*
  //*Since the largest a number a can be in JS is 4.1e^9 we can simple solve anything with 9 digits since even when rounding we will at most get 1.9e^9  /
  if (a.length < 10 && b.length < 10) return String(+a + +b);
  //*This for anything longer than 9 digits, first we seperate the strings into arrays and reverse it to keep the order from lowest digit to highest digit /
  let aArr = a.split("").reverse();
  let bArr = b.split("").reverse();
  let out = [];
  let carryOver = false;

  //*This evenly sizes the arrays by adding 0s to the end/
  while (bArr.length < aArr.length) {
    bArr.push("0");
  }
  while (aArr.length < bArr.length) {
    bArr.push("0");
  }

  //*now we can add the sections remembering to carry the 1 if the number is ever larger than 9 /
  for (i in aArr) {
    let temp = +aArr[i] + +bArr[i];
    if (carryOver) {
      temp += 1;
      carryOver = false;
    }
    if (temp > 9) {
      carryOver = true;
      out.push(temp - 10 + "");
    } else {
      out.push(temp + "");
    }
  }

  //*dealing with the last carryover if there is one /
  if (carryOver) out.push("1");

  // console.log(aArr, bArr, out);
  return out.reverse().join("");
*/
BigInt;
//!ATTEMPT 3
function sumStrings(a, b) {
  return String(BigInt(a) + BigInt(b));
}

sumStrings("712569312664357328695151392", "8100824045303269669937");

let n = -10.7;
console.log(~~n, Math.floor(n));
