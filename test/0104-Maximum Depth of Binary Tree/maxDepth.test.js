const assert = require('assert');
const maxDepth1 = require('../../src/0104-Maximum Depth of Binary Tree/maxDepth1');
const maxDepth2 = require('../../src/0104-Maximum Depth of Binary Tree/maxDepth2');

describe('#0104-Maximum Depth of Binary Tree', () => {
    [maxDepth1, maxDepth2].forEach((maxDepth) => {
        it('should return the depth of binary tree', () => {
            let tree = null;
            assert.strictEqual(maxDepth(tree), 0);

            tree = {
                val: 1,
                left: null,
                right: null,
            };
            assert.strictEqual(maxDepth(tree), 1);

            tree.left = {
                val: 2,
                left: {
                    val: 4,
                    left: null,
                    right: null,
                },
                right: null,
            };
            tree.right = {
                val: 3,
                left: null,
                right: null,
            };
            assert.strictEqual(maxDepth(tree), 3);
        });
    });
});
