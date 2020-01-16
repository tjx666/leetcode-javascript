const assert = require('assert');
const searchInsert = require('../../src/0035-Search Insert Position/searchInsert');

describe('#0035-Search Insert Position', () => {
    describe('#searchInsert', () => {
        it('should searchInsert([]) return 0', () => {
            assert(searchInsert([], 1) === 0);
        });

        it('should searchInsert([1], 0) return 0', () => {
            assert(searchInsert([1], 0) === 0);
        });

        it('should searchInsert([1], 1) return 0', () => {
            assert(searchInsert([1], 1) === 0);
        });

        it('should searchInsert([1, 3, 5, 6], 2) return 1', () => {
            assert(searchInsert([1, 3, 5, 6], 2) === 1);
        });

        it('should searchInsert([1, 3, 5, 6], 5) return 2', () => {
            assert(searchInsert([1, 3, 5, 6], 5) === 2);
        });
    });
});
