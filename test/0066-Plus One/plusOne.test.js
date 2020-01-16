const assert = require('assert');

const plusOne1 = require('../../src/0066-Plus One/plusOne1');
const plusOne2 = require('../../src/0066-Plus One/plusOne2');

describe('#0066-Plus One', () => {
    [plusOne1, plusOne2].forEach((plusOne, index) => {
        describe(`#plusOne${index + 1}`, () => {
            it('should plusOne([1, 0, 0] return [1, 0, 1]', () => {
                assert.deepEqual(plusOne([1, 0, 0]), [1, 0, 1]);
            });

            it('should plusOne([9] return [1, 0]', () => {
                assert.deepEqual(plusOne([9]), [1, 0]);
            });

            it('should plusOne([9, 9] return [1, 0, 0]', () => {
                assert.deepEqual(plusOne([9, 9]), [1, 0, 0]);
            });
        });
    });
});
