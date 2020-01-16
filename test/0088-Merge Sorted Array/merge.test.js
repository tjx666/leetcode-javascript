const assert = require('assert');
const merge1 = require('../../src/0088-Merge Sorted Array/merge1');
const merge2 = require('../../src/0088-Merge Sorted Array/merge2');

describe('#0088-Merge Sorted Array', () => {
    [merge1, merge2].forEach((merge, index) => {
        describe(`#merge${index + 1}`, () => {
            it('merger([1], 1, [2], 1) should return [1, 2]', () => {
                const nums1 = [1];
                const m = 1;
                const nums2 = [2];
                const n = 1;

                assert.deepEqual(merge(nums1, m, nums2, n), [1, 2]);
            });

            it('merger([2], 1, [1], 1) should return [1, 2]', () => {
                const nums1 = [2];
                const m = 1;
                const nums2 = [1];
                const n = 1;

                assert.deepEqual(merge(nums1, m, nums2, n), [1, 2]);
            });

            it('complex number array test', () => {
                const nums1 = [1, 2, 3, 0, 0, 0];
                const m = 3;
                const nums2 = [2, 5, 6];
                const n = 3;

                assert.deepEqual(merge(nums1, m, nums2, n), [1, 2, 2, 3, 5, 6]);
            });
        });
    });
});
