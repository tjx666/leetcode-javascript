const assert = require('assert');
const maxArea1 = require('../../src/0011-Container With Most Water/maxArea1');
const maxArea2 = require('../../src/0011-Container With Most Water/maxArea2');

[maxArea1, maxArea2].forEach((maxArea, index) => {
    describe(`#maxArea${index}`, () => {
        it('should return the maxArea', () => {
            const testHeightArray = [1, 8, 6, 2, 5, 4, 8, 3, 7];
            assert.strictEqual(maxArea(testHeightArray), 49);
        });
    });
});
