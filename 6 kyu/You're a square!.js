var isSquare = function (n) {
  return Math.floor(Math.sqrt(n)) ** 2 === n;
};

console.log(isSquare(14));
console.log(isSquare(10));
console.log(isSquare(-23));
console.log(isSquare(16));
