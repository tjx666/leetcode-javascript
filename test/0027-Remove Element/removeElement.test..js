const assert = require('assert');

const removeElement1 = require('../../src/0027-Remove Element/removeElement1');
const removeElement2 = require('../../src/0027-Remove Element/removeElement2');

describe('#0027-Remove Element', () => {
    [removeElement1, removeElement2].forEach((removeElement, index) => {
        describe(`#removeElement${index + 1}`, () => {
            it('empty array return 0', () => {
                const testArray = [];
                assert(removeElement(testArray, 6) === 0);
                assert.deepEqual(testArray, []);
            });

            it('one element', () => {
                const testArray = [1];
                assert(removeElement(testArray, 1) === 0);
                assert.deepEqual(testArray, []);
            });

            const complexTestArray = [3, 2, 2, 3];
            it(`should removeDuplicates(${JSON.stringify(complexTestArray)}) return 2`, () => {
                assert(removeElement(complexTestArray, 3) === 2);
            });
        });
    });
});
