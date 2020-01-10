const assert = require('assert');
const { shuffle, range } = require('lodash');

const twoSum1 = require('../src/0001-Two Sum/twoSum1');
const twoSum2 = require('../src/0001-Two Sum/twoSum2');

[twoSum1, twoSum2].forEach((twoSum, index) => {
    describe(`#twoSum${index + 1}`, () => {
        const testArray = shuffle(range(1, 1001));
        const index1 = testArray.indexOf(1);
        const index2 = testArray.indexOf(2);
        const result = index1 < index2 ? [index1, index2] : [index2, index1];

        it(`should twoSum(testArray, 3) return ${JSON.stringify(result)}`, () => {
            assert.deepEqual(twoSum(testArray, 3), result);
        });
    });
});
