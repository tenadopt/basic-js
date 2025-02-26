const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numStr = n.toString();
  let maxNum = 0;

  for (let i = 0; i < numStr.length; i += 1) {
    let newNum = parseInt(numStr.slice(0, i) + numStr.slice(i + 1), 10);

    maxNum = Math.max(maxNum, newNum);
  }

  return maxNum;
}

module.exports = {
  deleteDigit
};
