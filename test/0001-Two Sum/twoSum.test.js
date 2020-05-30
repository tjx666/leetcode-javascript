const assert = require('assert');

const twoSum1 = require('../../src/0001-Two Sum/twoSum1');
const twoSum2 = require('../../src/0001-Two Sum/twoSum2');
const twoSum3 = require('../../src/0001-Two Sum/twoSum3');

describe('#0001-Two Sum', () => {
    [twoSum1, twoSum2, twoSum3].forEach((twoSum, index) => {
        describe(`#twoSum${index + 1}`, () => {
            const testArray = [2, 1, 3, 5];
            it(`should twoSum(testArray, 7) return '0,3' or '3,0'`, () => {
                const result = twoSum(testArray, 7).toString();
                assert.ok(result === '0,3' || result === '3,0');
            });
        });
    });
});
