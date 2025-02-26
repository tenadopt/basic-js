const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (
        typeof message !== 'string' ||
        typeof key !== 'string'
    ) throw new Error('Incorrect arguments!');

    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i += 1) {
      let char = message[i];
      if (char >= 'A' && char <= 'Z') {
        let shift = key[keyIndex % key.length].charCodeAt(0) - 65;
        let newChar = String.fromCharCode(((char.charCodeAt(0) - 65 + shift) % 26) + 65);
        result += newChar;
        keyIndex += 1;
      } else {
        result += char;
      }
    }

    return this.direct ? result : result.split('').reverse().join('')
  }

  decrypt(encryptedMessage, key) {
    if (
        typeof encryptedMessage !== 'string' ||
        typeof key !== 'string'
    ) throw new Error('Incorrect arguments!');

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < encryptedMessage.length; i += 1) {
      let char = encryptedMessage[i];
      if (char >= 'A' && char <= 'Z') {
        let shift = key[keyIndex % key.length].charCodeAt(0) - 65;
        let newChar = String.fromCharCode(((char.charCodeAt(0) - 65 - shift + 26) % 26) + 65);
        result += newChar;
        keyIndex += 1;
      } else {
        result += char;
      }
    }
    return this.direct ? result : result.split('').reverse().join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};
