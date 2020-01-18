const assert = require('assert');

const generate = require(`../../src/0118-Pascal's Triangle/generate`);

describe(`#0118-Pascal's Triangle`, () => {
    it('should numRows equals 0 return [] ', () => {
        assert.deepEqual(generate(0), []);
    });

    it('should numRows equals 1 return [[1]]', () => {
        assert.deepEqual(generate(1), [[1]]);
    });

    it('when numRows equals 5', () => {
        const result = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];
        assert.deepEqual(generate(5), result);
    });
});
