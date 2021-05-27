// Define a function that takes in two non-negative integers aaa and bbb and returns the last decimal digit of aba^ba
// b
//  . Note that aaa and bbb may be very large!

// For example, the last decimal digit of 979^79
// 7
//   is 999, since 97=47829699^7 = 47829699
// 7
//  =4782969. The last decimal digit of (2200)2300({2^{200}})^{2^{300}}(2
// 200
//  )
// 2
// 300

//  , which has over 109210^{92}10
// 92
//   decimal digits, is 666. Also, please take 000^00
// 0
//   to be 111.

// You may assume that the input will always be valid.

// Examples
// lastDigit("4", "1")            // returns 4
// lastDigit("4", "2")            // returns 6
// lastDigit("9", "7")            // returns 9
// lastDigit("10","10000000000")  // returns 0

var lastDigit = function (str1, str2) {
  str1 = BigInt(str1.split("").pop());
  str2 = BigInt(str2);
  // let temp = +str1;
  // let count = 0;
  // if (str1 == 0 || str1 == 1 || str1 == 6) return str1;

  // while (true) {
  //   temp = (str1 * temp) % 10;
  //   count++;
  //   if (temp == str1) break;
  // }
  // console.log("count " + count);
  // temp = Number(str2 % BigInt(count));
  console.log(str1);
  console.log(str2);

  return str1 ** str2;
};

console.log(
  lastDigit(
    "1606938044258990275541962092341162602522202993782792835301376",
    "2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376"
  )
);
// console.log(
//   lastDigit(
//     "3715290469715693021198967285016729344580685479654510946723",
//     "68819615221552997273737174557165657483427362207517952651"
//   )
// );

// console.log(lastDigit("4", "1"));
// console.log(lastDigit("4", "2"));
// console.log(lastDigit("9", "7"));
// console.log(lastDigit("10", "10000000000"));
// Test.assertEquals(lastDigit("4", "1"), 4);
// Test.assertEquals(lastDigit("4", "2"), 6);
// Test.assertEquals(lastDigit("9", "7"), 9);
// Test.assertEquals(lastDigit("10", "10000000000"), 0);

//6, 7, 4, 6, 9, 0
