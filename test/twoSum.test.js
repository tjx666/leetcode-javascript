const assert = require('assert');
const twoSum = require('../src/0001-Two Sum/twoSum');

describe('#twoSum', () => {
    it('should twoSum([5, 3, 1, 4, 8, 9, 6], 4) return [1, 2]', () => {
        assert.deepEqual(twoSum([5, 3, 1, 4, 8, 9, 6], 4), [1, 2]);
    });
});
