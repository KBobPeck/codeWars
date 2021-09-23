// var myAtoi = function (s) {

//   let out = s.trim().split(" ")
//   const big = 2 ** 31 - 1;
//   let arr = []

//   out = out.filter(i => i !== ' ')[0]

//   if (out[0] === "+" && out[1] === '-') return 0
//   if (out[0] === "-" && out[1] === '+') return 0

//   let neg = out[0] === "-" ? "-" : "";
//   let pos = out[0] === '+' ? "+" : "";

//   let i = neg ? 1 : pos ? 1 : 0;

//   loop: for (i; i < out.length; i++) {
//     if (isNaN(out[i])) {
//       break loop;
//     }
//     arr.push(out[i]);
//   }

//   out = Number(arr.join(""));

//   if (out) {
//     if (out > big) {
//       return neg ? neg + (big + 1) : big;
//     }
//     return Number(neg + out);
//   }

//   return 0;
// };

// console.log(myAtoi("  +1  ++88827   5655  U"));
let data = [
  [1, 4, 2, 3],
  [3, 2, 4, 1],

  [4, 1, 3, 2],
  [2, 3, 1, 4],
];

const width = data[0].length;
const height = data.length;
const boxWidth = data.length ** (1 / 2);
let boxes = new Array(width).fill([]);
let cols = new Array(width).fill([]);
let rows = [...data];

for (x in data) {
  for (y in data[x]) {
    cols[y] = [...cols[y], data[x][y]];
    boxNum = Math.floor(y / boxWidth) + Math.floor(x / boxWidth) * boxWidth;
    boxes[boxNum] = [...boxes[boxNum], data[x][y]];
  }
}

for (let i = 0; i < width; i++) {
  if(!cols[i].includes(i+1)) console.log( false)
  if(!rows[i].includes(i+1)) console.log( false)
  if(!boxes[i].includes(i+1)) console.log( false)
}
console.log( true)
// console.table(boxes);
