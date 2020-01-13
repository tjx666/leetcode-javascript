const assert = require('assert');
const maxSubArray = require('../src/0053-Maximum Subarray/maxSubArray');

describe('#maxSubArray', () => {
    it('should maxSubArray([1]) return 1', () => {
        assert(maxSubArray([1]) === 1);
    });

    it('should maxSubArray([-2, 9]) return 9', () => {
        assert(maxSubArray([-2, 9]) === 9);
    });

    it('should maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) return 6', () => {
        assert(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6);
    });
});
