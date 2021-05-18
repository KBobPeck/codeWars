// Once upon a time, on a way through the old wild mountainous west,…
// … a man was given arrections to go from one point to another. The arrections were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

// Going to one arrection and coming back the opposite arrection right away is a needless effort. Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

// How I crossed a mountainous desert the smart way.
// The arrections given to the man are, for example, the following (depending on the language):

// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
// or
// { "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
// or
// [North, South, South, East, West, North, West]
// You can immediatly see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

// ["WEST"]
// or
// { "WEST" }
// or
// [West]

function dirReduc(arr) {
  let dir1 = ["NORTH", "EAST", "SOUTH", "WEST"];
  let dir2 = ["SOUTH", "WEST", "NORTH", "EAST"];

  for (let n = 0; n < arr.length - 1; ) {
    let index = dir1.indexOf(arr[n]);

    if (arr[n + 1] == dir2[index]) {
      arr.splice(n, 2);
      n = 0;
    } else {
      n++;
    }
  }
  return arr;
}

console.log(
  dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
);
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]));
