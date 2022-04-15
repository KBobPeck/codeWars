// This is a hard version of How many are smaller than me?. If you have troubles solving this one, have a look at the easier kata first.

// Write

// function smaller(arr)
// that given an array arr, you have to return the amount of numbers that are smaller than arr[i] to the right.

// For example:

// smaller([5, 4, 3, 2, 1]) === [4, 3, 2, 1, 0]
// smaller([1, 2, 0]) === [1, 1, 0]

function smaller(arr) {
  console.log(arr);
  let out = [];
  for (let i = 0; i < arr.length; i++) {
    num = 0;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) num++;
    }
    out.push(num);
  }
  // console.log(out);
  return out;
}

smaller([5, 4, 3, 2, 1]);
smaller([1, 1, -1, 0, 0]);
