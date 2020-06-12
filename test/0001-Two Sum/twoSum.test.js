const assert = require('assert');

const twoSum1 = require('../../src/0001-Two Sum/twoSum1');
const twoSum2 = require('../../src/0001-Two Sum/twoSum2');
const twoSum3 = require('../../src/0001-Two Sum/twoSum3');

describe('#0001-Two Sum', () => {
    [twoSum1, twoSum2, twoSum3].forEach((twoSum, index) => {
        describe(`#twoSum${index + 1}`, () => {
            const testArray = [2, 1, 4, 7];
            it(`should twoSum(testArray, 6) return '0,2' or '2,0'`, () => {
                const result = twoSum(testArray, 6).toString();
                assert.ok(result === '0,2' || result === '2,0');
            });
        });
    });
});
