const assert = require('assert');
const addBinary = require('../../src/0067-Add Binary/addBinary1');

describe('#0067-Add Binary', () => {
    it('should return the sum of tow binary integer string', () => {
        assert.strictEqual(addBinary('10', '1'), '11');
        assert.strictEqual(addBinary('11', '1'), '100');
    });
});
