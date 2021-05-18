function narcissistic(value) {
  let num = String(value).split("");
  let total = 0;
  for (n of num) {
    total += n ** num.length;
  }
  return value === total;
}

console.log(narcissistic(1234));
console.log(narcissistic(10));
console.log(narcissistic(7));
console.log(narcissistic(371));
