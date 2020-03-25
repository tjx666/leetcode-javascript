const assert = require('assert');
const intToRoman = require('../../src/0012-Integer to Roman/intToRoman');

describe('#0012-Integer to Roman', () => {
    it('should return the roman format string of given integer', () => {
        assert.strictEqual(intToRoman(3), 'III');
        assert.strictEqual(intToRoman(4), 'IV');
        assert.strictEqual(intToRoman(9), 'IX');
        assert.strictEqual(intToRoman(58), 'LVIII');
        assert.strictEqual(intToRoman(1994), 'MCMXCIV');
    });
});
