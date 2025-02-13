const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const sampleActivityNum = Number(sampleActivity);
  if (typeof sampleActivity !== 'string' ||
      sampleActivityNum < 0 ||
      Number.isNaN(sampleActivityNum) ||
      sampleActivityNum > MODERN_ACTIVITY) {
    return false;
  }
  const result = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityNum) / (0.693 / HALF_LIFE_PERIOD));

  if (result === Infinity) return false;

  return result;
}

module.exports = {
  dateSample
};
