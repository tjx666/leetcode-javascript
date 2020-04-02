const assert = require('assert');

const removeDuplicates1 = require('../../src/0026-Remove Duplicates from Sorted Array/removeDuplicates1');
const removeDuplicates2 = require('../../src/0026-Remove Duplicates from Sorted Array/removeDuplicates2');

describe('#0026-Remove Duplicates from Sorted Array', () => {
    [removeDuplicates1, removeDuplicates2].forEach((removeDuplicates, index) => {
        describe(`#removeDuplicates${index + 1}`, () => {
            it('empty array return 0', () => {
                const testArray = [];
                assert(removeDuplicates(testArray) === 0);
                assert.deepEqual(testArray, []);
            });

            it('one element return 1', () => {
                const testArray = [1];
                assert(removeDuplicates(testArray) === 1);
                assert.deepEqual(testArray, [1]);
            });

            const complexTestArray = [1, 1, 2, 3, 4, 6, 6, 6, 7, 8, 9, 9];
            it(`should removeDuplicates(${JSON.stringify(complexTestArray)}) return 8`, () => {
                assert(removeDuplicates(complexTestArray) === 8);
            });
        });
    });
});
