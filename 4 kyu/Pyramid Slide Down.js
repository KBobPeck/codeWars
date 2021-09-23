// Pyramids are amazing! Both in architectural and mathematical sense. If you have a computer,
// you can mess with pyramids even if you are not in Egypt at the time. For example, let's consider
// the following problem. Imagine that you have a pyramid built of numbers, like this one here:

//    /3/
//   \7\ 4
//  2 \4\ 6
// 8 5 \9\ 3
// Here comes the task...
// Let's say that the 'slide down' is the maximum sum of consecutive numbers from the top to the
// bottom of the pyramid. As you can see, the longest 'slide down' is 3 + 7 + 4 + 9 = 23

// Your task is to write a function longestSlideDown (in ruby/crystal/julia: longest_slide_down)
// that takes a pyramid representation as argument and returns its' largest 'slide down'. For example,
// longestSlideDown([[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]) => 23

function longestSlideDown(pyramid) {
  let last = [pyramid[0][0]];
  let current = [];

  //each row of the pyramid
  for (let i = 1; i < pyramid.length; i++) {
    //each number in the row
    for (let j = 0; j < pyramid[i].length; j++) {
      //check the 2 above it and always add the bigger one,
      if (j == 0) {
        current.push(pyramid[i][j] + last[0]);
      } else if (j == pyramid[i].length - 1) {
        current.push(pyramid[i][j] + last[last.length - 1]);
      } else {
        current.push(pyramid[i][j] + Math.max(last[j - 1], last[j]));
      }
    }
    last = current;
    current = [];
  }
  return Math.max(...last);
}

console.log(longestSlideDown([[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]));


// you can work on it in reverse
// function longestSlideDown (pyramid) {
//   for (var i = pyramid.length - 2; i > -1; i--) {
//     for (var j = 0; j < pyramid[i].length; j++) {
//       pyramid[i][j] += Math.max(pyramid[i + 1][j], pyramid[i + 1][j + 1]);
//     }
//   }
//   return pyramid[0][0];
// }