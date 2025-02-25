const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      throw new Error('Array must be an Array');
    }

    let depth = 1;
    let maxDepth = 0;

    for (const element of arr) {
      if (Array.isArray(element)) {
        maxDepth = Math.max(maxDepth, this.calculateDepth(element));
      }
    }

    return depth + maxDepth;
  }
}

module
    .exports = {
  DepthCalculator
};
