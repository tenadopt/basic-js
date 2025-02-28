const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = Array.from({length: rows}, () => Array(cols).fill(0));

  for (let r = 0; r < rows; r += 1) {
    for (let c = 0; c < cols; c += 1) {
      if (matrix[r][c]) {
        for (let dr of [-1, 0, 1]) {
          for (let dc of [-1, 0, 1]) {
            if (dr === 0 && dc === 0) continue;
            let nr = r + dr, nc = c + dc;
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
              result[nr][nc] += 1;
            }
          }
        }
      }
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
