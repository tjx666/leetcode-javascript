const assert = require('assert');
const maxSubArray1 = require('../../src/0053-Maximum Subarray/maxSubArray1');
const maxSubArray2 = require('../../src/0053-Maximum Subarray/maxSubArray2');
const maxSubArray3 = require('../../src/0053-Maximum Subarray/maxSubArray3');

describe('#0053-Maximum Subarray', () => {
    [maxSubArray1, maxSubArray2, maxSubArray3].forEach((maxSubArray, index) => {
        describe(`#solution${index + 1}`, () => {
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
    });
});
