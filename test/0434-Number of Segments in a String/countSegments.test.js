const assert = require('assert');
const countSegments = require('../../src/0434-Number of Segments in a String/countSegments');

describe('0434-Number of Segments in a String/countSegments', () => {
    it('should return the count of words', () => {
        assert.strictEqual(countSegments(''), 0);
        assert.strictEqual(countSegments(' '), 0);
        assert.strictEqual(countSegments(' \n '), 0);
        assert.strictEqual(countSegments(' a'), 1);
        assert.strictEqual(countSegments(' a '), 1);
        assert.strictEqual(countSegments('a b'), 2);
        assert.strictEqual(countSegments('a \n b'), 2);
        assert.strictEqual(countSegments('a \n b \n'), 2);
    });
});
