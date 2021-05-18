function validParentheses(parens) {
  let count = 0;

  for (p of parens) {
    p === "(" ? count++ : count--;
    if (count < 0) return false;
  }
  return count === 0;
}

console.log(validParentheses("(()())"));
console.log(validParentheses("()()("));
console.log(validParentheses(")()()("));
