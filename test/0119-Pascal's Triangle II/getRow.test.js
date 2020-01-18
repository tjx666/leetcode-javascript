const assert = require('assert');

const getRow = require(`../../src/0119-Pascal's Triangle II/getRow`);

describe(`#0119-Pascal's Triangle II`, () => {
    it('should getRow(0) return [1]', () => {
        assert.deepEqual(getRow(0), [1]);
    });

    it('should getRow(1) return [1, 1]', () => {
        assert.deepEqual(getRow(1), [1, 1]);
    });

    it('should getRow(2) return [1, 2, 1]', () => {
        assert.deepEqual(getRow(2), [1, 2, 1]);
    });
});
