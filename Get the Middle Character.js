function getMiddle(s) {
  if (s.length % 2 == 0) return s.substring(s.length / 2 - 1, s.length / 2 + 1);
  else return s.substring(Math.floor(s.length / 2), s.length / 2 + 1);
}

console.log(getMiddle("test"));
console.log(getMiddle("tests"));
console.log(getMiddle("testing"));
