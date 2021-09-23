// var goodSudoku1 = new Sudoku([
//   [7,8,4, 1,5,9, 3,2,6],
//   [5,3,9, 6,7,2, 8,4,1],
//   [6,1,2, 4,3,8, 7,5,9],

//   [9,2,8, 7,1,5, 4,6,3],
//   [3,5,7, 8,4,6, 1,9,2],
//   [4,6,1, 9,2,3, 5,8,7],

//   [8,7,6, 3,9,4, 2,1,5],
//   [2,4,3, 5,6,1, 9,7,8],
//   [1,9,5, 2,8,7, 6,3,4]
// ]);

// var goodSudoku2 = new Sudoku([
//   [1,4, 2,3],
//   [3,2, 4,1],

//   [4,1, 3,2],
//   [2,3, 1,4]
// ]);

// var badSudoku1 = new Sudoku([
//   [1,2,3, 4,5,6, 7,8,9],
//   [1,2,3, 4,5,6, 7,8,9],
//   [1,2,3, 4,5,6, 7,8,9],

//   [1,2,3, 4,5,6, 7,8,9],
//   [1,2,3, 4,5,6, 7,8,9],
//   [1,2,3, 4,5,6, 7,8,9],

//   [1,2,3, 4,5,6, 7,8,9],
//   [1,2,3, 4,5,6, 7,8,9],
//   [1,2,3, 4,5,6, 7,8,9]
// ]);

// var badSudoku2 = new Sudoku([
//   [1,2,3,4,5],
//   [1,2,3,4],
//   [1,2,3,4],
//   [1]
// ]);

//check for any width

var Sudoku = function (data) {
  //   Private methods
  // -------------------------

  //   Public methods
  // -------------------------
  return {
    isValid: function () {
      // YOUR SOLUTION
      const width = data[0].length;
      const height = data.length;
      if (height == 0 || width == 0 || height != width) return false;
      for (x in data) {
        if (data[x].length != width) return false;
      }
      if (data.length ** (1 / 2) % 1 != 0) return false;

      const boxWidth = data.length ** (1 / 2);
      let boxes = new Array(width).fill([]);
      let cols = new Array(width).fill([]);
      let rows = [...data];

      for (x in data) {
        for (y in data[x]) {
          cols[y] = [...cols[y], data[x][y]];
          boxNum =
            Math.floor(y / boxWidth) + Math.floor(x / boxWidth) * boxWidth;
          boxes[boxNum] = [...boxes[boxNum], data[x][y]];
        }
      }

      for (let i = 0; i < width; i++) {
        if (!cols[i].includes(i + 1)) return false;
        if (!rows[i].includes(i + 1)) return false;
        if (!boxes[i].includes(i + 1)) return false;
      }

      return true;
    },
  };
};

function Sudoku(board) {
  var sqrt = Math.sqrt(board.length);
  var esum = (board.length * (board.length + 1)) / 2;

  function checkDigits(selection) {
    return (
      selection.reduce(function (sum, digit) {
        return typeof digit == "number" ? sum + digit : NaN;
      }, 0) == esum
    );
  }

  return {
    isValid: function () {
      return board.every(function (row, i) {
        return (
          checkDigits(row) &&
          checkDigits(
            board.map(function (row) {
              return row[i];
            })
          ) &&
          checkDigits(
            board.map(function (_, j) {
              return board[
                ((i / sqrt) | 0) * sqrt + ((j / sqrt) | 0)
              ][(i % sqrt) * sqrt + (j % sqrt)];
            })
          )
        );
      });
    },
  };
}

var goodSudoku1 = new Sudoku([
  [7, 8, 4, 1, 5, 9, 3, 2, 6],
  [5, 3, 9, 6, 7, 2, 8, 4, 1],
  [6, 1, 2, 4, 3, 8, 7, 5, 9],

  [9, 2, 8, 7, 1, 5, 4, 6, 3],
  [3, 5, 7, 8, 4, 6, 1, 9, 2],
  [4, 6, 1, 9, 2, 3, 5, 8, 7],

  [8, 7, 6, 3, 9, 4, 2, 1, 5],
  [2, 4, 3, 5, 6, 1, 9, 7, 8],
  [1, 9, 5, 2, 8, 7, 6, 3, 4],
]);

var goodSudoku2 = new Sudoku([
  [1, 4, 2, 3],
  [3, 2, 4, 1],

  [4, 1, 3, 2],
  [2, 3, 1, 4],
]);

var badSudoku1 = new Sudoku([
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],

  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],

  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
]);

var badSudoku2 = new Sudoku([[1, 2, 3, 4, 5], [1, 2, 3, 4], [1, 2, 3, 4], [1]]);

console.log(goodSudoku1.isValid());
console.log(goodSudoku2.isValid());
console.log(badSudoku1.isValid());
console.log(badSudoku2.isValid());
