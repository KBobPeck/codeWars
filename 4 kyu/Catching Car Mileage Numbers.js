// Let's make it so Bob never misses another interesting number. We've hacked into his car's
// computer, and we have a box hooked up that reads mileage numbers. We've got a box glued to
// his dash that lights up yellow or green depending on whether it receives a 1 or a 2
// (respectively).

// It's up to you, intrepid warrior, to glue the parts together. Write the function that
// parses the mileage number input, and returns a 2 if the number is "interesting" (see below),
// a 1 if an interesting number occurs within the next two miles, or a 0 if the number is not
// interesting.

// Note: In Haskell, we use No, Almost and Yes instead of 0, 1 and 2.

// "Interesting" Numbers
// Interesting numbers are 3-or-more digit numbers that meet one or more of the following criteria:

// Any digit followed by all zeros: 100, 90000
// Every digit is the same number: 1111
// The digits are sequential, incementing†: 1234
// The digits are sequential, decrementing‡: 4321
// The digits are a palindrome: 1221 or 73837
// The digits match one of the values in the awesomePhrases array
// † For incrementing sequences, 0 should come after 9, and not before 1, as in 7890.
// ‡ For decrementing sequences, 0 should come after 1, and not before 9, as in 3210.

// So, you should expect these inputs and outputs:

// // "boring" numbers
// isInteresting(3, [1337, 256]);    // 0
// isInteresting(3236, [1337, 256]); // 0

// // progress as we near an "interesting" number
// isInteresting(11207, []); // 0
// isInteresting(11208, []); // 0
// isInteresting(11209, []); // 1
// isInteresting(11210, []); // 1
// isInteresting(11211, []); // 2

// // nearing a provided "awesome phrase"
// isInteresting(1335, [1337, 256]); // 1
// isInteresting(1336, [1337, 256]); // 1
// isInteresting(1337, [1337, 256]); // 2

// Error Checking
// A number is only interesting if it is greater than 99!
// Input will always be an integer greater than 0, and less than 1,000,000,000.
// The awesomePhrases array will always be provided, and will always be an array, but may be empty. (Not everyone thinks numbers spell funny words...)
// You should only ever output 0, 1, or 2.

function isInteresting(number, awesomePhrases) {
  console.log(number);
  let interesting = 0;

  if (number == 98) return 1;
  if (number == 99) return 1;
  if (number < 100) return 0;

  let check1 = traillingZeros(number);
  if (check1 == 2) return 2;
  let check2 = same(number);
  if (check2 == 2) return 2;
  let check3 = sequential(number);
  if (check3 == 2) return 2;
  let check4 = sequentialReverse(number);
  if (check4 == 2) return 2;
  let check5 = palandrome(number);
  if (check5 == 2) return 2;
  let check6 = awesome(number, awesomePhrases);
  if (check6 == 2) return 2;

  if (check1 > interesting) interesting = check1;
  if (check2 > interesting) interesting = check2;
  if (check3 > interesting) interesting = check3;
  if (check4 > interesting) interesting = check4;
  if (check5 > interesting) interesting = check5;
  if (check6 > interesting) interesting = check6;

  return interesting;
}

//checks if there is a number followed by 0s
function traillingZeros(num) {
  const num1 = String(num).split("");
  const num2 = String(num + 1).split("");
  const num3 = String(num + 2).split("");
  let interesting = true;

  //check the number entered
  for (let i = 1; i < num1.length; i++) {
    if (num1[i] != "0") interesting = false;
  }
  if (interesting) return 2;
  else interesting = true;

  //check the next numebr
  for (let i = 1; i < num2.length; i++) {
    if (num2[i] != "0") interesting = false;
  }

  if (interesting) return 1;
  else interesting = true;

  //check the last number
  for (let i = 1; i < num3.length; i++) {
    if (num3[i] != "0") interesting = false;
  }
  if (interesting) return 1;

  return 0;
}

function same(num) {
  const num1 = String(num).split("");
  const num2 = String(num + 1).split("");
  const num3 = String(num + 2).split("");
  let interesting = true;

  //check the number entered
  for (let i = 1; i < num1.length; i++) {
    if (num1[i] != num1[0]) interesting = false;
  }
  if (interesting) return 2;
  else interesting = true;

  //check the next numebr
  for (let i = 1; i < num2.length; i++) {
    if (num2[i] != num2[0]) interesting = false;
  }

  if (interesting) return 1;
  else interesting = true;

  //check the last number
  for (let i = 1; i < num3.length; i++) {
    if (num3[i] != num3[0]) interesting = false;
  }
  if (interesting) return 1;

  return 0;
}

function sequential(num) {
  const num1 = String(num).split("");
  const num2 = String(num + 1).split("");
  const num3 = String(num + 2).split("");
  let interesting = true;

  for (let i = 0; i < num1.length - 1; i++) {
    if (num1[i] == 9 && num1[i + 1] == 0) {
    } else {
      if (num1[i + 1] != num1[i] * 1 + 1 || num1[i] == 0) {
        interesting = false;
      }
    }
  }
  if (interesting) return 2;
  else interesting = true;

  for (let i = 0; i < num2.length - 1; i++) {
    if (num2[i] == 9 && num2[i + 1] == 0) {
    } else {
      if (num2[i + 1] != num2[i] * 1 + 1 || num2[i] == 0) {
        interesting = false;
      }
    }
  }
  if (interesting) return 1;
  else interesting = true;

  for (let i = 0; i < num3.length - 1; i++) {
    if (num3[i] == 9 && num3[i + 1] == 0) {
    } else {
      if (num3[i + 1] != num3[i] * 1 + 1 || num3[i] == 0) {
        interesting = false;
      }
    }
  }
  if (interesting) return 1;

  return 0;
}

function sequentialReverse(num) {
  const num1 = String(num).split("");
  const num2 = String(num + 1).split("");
  const num3 = String(num + 2).split("");
  let interesting = true;

  for (let i = 0; i < num1.length - 1; i++) {
    if (num1[i] == 1 && num1[i + 1] == 0) {
    } else {
      if (num1[i + 1] != num1[i] * 1 - 1 || num1[i] == 0) {
        interesting = false;
      }
    }
  }
  if (interesting) return 2;
  else interesting = true;

  for (let i = 0; i < num2.length - 1; i++) {
    if (num2[i] == 1 && num2[i + 1] == 0) {
    } else {
      if (num2[i + 1] != num2[i] * 1 - 1 || num2[i] == 0) {
        interesting = false;
      }
    }
  }
  if (interesting) return 1;
  else interesting = true;

  for (let i = 0; i < num3.length - 1; i++) {
    if (num3[i] == 1 && num3[i + 1] == 0) {
    } else {
      if (num3[i + 1] != num3[i] * 1 - 1 || num3[i] == 0) {
        interesting = false;
      }
    }
  }
  if (interesting) return 1;

  return 0;
}

function palandrome(num) {
  const num1 = String(num).split("");
  const num2 = String(num + 1).split("");
  const num3 = String(num + 2).split("");
  let interesting = true;

  //check the number entered
  if ([...num1].reverse().join("") != num1.join("")) interesting = false;

  if (interesting) return 2;
  else interesting = true;

  //check the next numebr

  if ([...num2].reverse().join("") != num2.join("")) interesting = false;

  if (interesting) return 1;
  else interesting = true;

  //check the last number

  if ([...num3].reverse().join("") != num3.join("")) interesting = false;
  if (interesting) return 1;

  return 0;
}

function awesome(num, awsomes) {
  const num1 = num;
  const num2 = num + 1;
  const num3 = num + 2;

  if (awsomes.includes(num1)) return 2;
  else if (awsomes.includes(num2)) return 1;
  else if (awsomes.includes(num3)) return 1;
  else return 0;
}

// console.log(isInteresting(121));
// console.log(isInteresting(1221));
console.log(isInteresting(1330, [1234, 4335, 1337]));
// console.log(isInteresting(3213));
