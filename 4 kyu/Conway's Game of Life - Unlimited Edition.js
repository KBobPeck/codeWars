// Given a 2D array and a number of generations, compute n
//timesteps of Conway's Game of Life.

// The rules of the game are:

// Any live cell with fewer than two live neighbours dies, as
//if caused by underpopulation.
// Any live cell with more than three live neighbours dies,
//as if by overcrowding.
// Any live cell with two or three live neighbours lives
//on to the next generation.
// Any dead cell with exactly three live neighbours becomes
//a live cell.
// Each cell's neighborhood is the 8 cells immediately around
//it (i.e. Moore neighborhood). The universe is infinite in
//both the x and y dimensions and all cells are initially
//dead - except for those specified in the arguments. The
//return value should be a 2d array cropped around all of
//the living cells. (If there are no living cells, then return [[]].)

// For illustration purposes, 0 and 1 will be represented as
// ░░ and ▓▓ blocks respectively (PHP, C: plain black and white
//squares). You can take advantage of the htmlize function to get
// a text representation of the universe, e.g.:

// console.log(htmlize(cells));

function getGeneration(cells, generations) {

  //creates a new array without mutating original
  let currentGen = new Array(cells.length)
  for (x in cells){
    currentGen[x] = [...cells[x]]
  }
  //alternate way to create a new array with no mutating
  // var ce = JSON.parse(JSON.stringify(cells));

  //loop for the generations
  for (let gen = 0; gen < generations; gen++) {
    //variables
    let neighborhood = [];
    let nextGen = [];

    //adding an extra layer of dead cells around the current gen
    for (x of currentGen) {
      x.push(0);
      x.unshift(0);
    }
    const width = currentGen[0].length;
    const filler = new Array(width).fill(0);
    currentGen.unshift(filler);
    currentGen.push(filler);

    //loop that finds the neighbors
    for (let x = 0; x < currentGen.length; x++) {
      neighborhood.push([]);
      for (let y = 0; y < currentGen[x].length; y++) {
        let neighbours = 0;
        let checkX = [x - 1, x, x + 1].filter(
          (each) => each >= 0 && each < currentGen.length
        );
        let checkY = [y - 1, y, y + 1].filter(
          (each) => each >= 0 && each < currentGen[x].length
        );
        for (eachx of checkX) {
          for (eachy of checkY) {
            if (currentGen[eachx][eachy] === 1) {
              neighbours++;
            }
          }
        }
        if (currentGen[x][y] === 1) neighbours--;
        neighborhood[x].push(neighbours);
      }
    }

    // loop to create the next generation
    for (x in neighborhood) {
      nextGen.push([]);
      for (y in neighborhood[x]) {
        if (neighborhood[x][y] < 2 || neighborhood[x][y] > 3)
          nextGen[x].push(0);
        if (neighborhood[x][y] === 3) nextGen[x].push(1);
        if (neighborhood[x][y] === 2) nextGen[x].push(currentGen[x][y]);
      }
    }

    // removing top, bottom, left and right dead  arrays
    //top
    while (true) {
      if (nextGen[0].includes(1)) {
        break;
      } else {
        nextGen.splice(0, 1);
      }
    }
    //bottom
    while (true) {
      if (nextGen[nextGen.length - 1].includes(1)) {
        break;
      } else {
        nextGen.splice(nextGen.length - 1, 1);
      }
    }
    //left
    while (true) {
      let remove = true;
      for (x in nextGen) {
        if (nextGen[x][0] === 1) {
          remove = false;
          break;
        }
      }
      if (remove) {
        for (x in nextGen) {
          nextGen[x].shift();
        }
      } else {
        break;
      }
    }
    //right
    while (true) {
      let remove = true;
      for (x in nextGen) {
        if (nextGen[x][nextGen[x].length - 1] === 1) {
          remove = false;
          break;
        }
      }
      if (remove) {
        for (x in nextGen) {
          nextGen[x].pop();
        }
      } else {
        break;
      }
    }

    //ending
    currentGen = nextGen;
  }
  return currentGen;
}

var gliders = [
  [1, 0, 0],
  [0, 1, 1],
  [1, 1, 0]
]

console.table(getGeneration(gliders, 2));

// [
//   [1, 0, 0],
//   [0, 1, 1],
//   [1, 1, 0],
// ],
// [
//   [0, 0, 0],
//   [1, 0, 1],
//   [0, 1, 1]
// ];
