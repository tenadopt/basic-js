const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options ) {
  str = String(str);
  let addition = options.addition !== undefined ? String(options.addition) : '';
  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator || '+';
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = options.additionSeparator || '|';

  let additionString = Array(additionRepeatTimes).fill(addition).join(additionSeparator);

  return Array(repeatTimes).fill(str + additionString).join(separator);
}

module.exports = {
  repeater
};
