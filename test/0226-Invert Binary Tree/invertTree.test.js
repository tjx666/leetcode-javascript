const assert = require('assert');
const invertTree1 = require('../../src/0226-Invert Binary Tree/invertTree1');
const invertTree2 = require('../../src/0226-Invert Binary Tree/invertTree2');

describe('#0226-Invert Binary Tree', () => {
    [invertTree1, invertTree2].forEach((invertTree, index) => {
        describe(`#invertTree${index + 1}`, () => {
            it('should return the invert tree', () => {
                let tree = null;
                assert.strictEqual(invertTree(tree), null);

                tree = {
                    val: 1,
                    left: null,
                    right: null,
                };
                const invertedTree1 = invertTree(tree);
                assert.strictEqual(invertedTree1.val, 1);
                assert.strictEqual(invertedTree1.left, null);
                assert.strictEqual(invertedTree1.right, null);

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
                const invertedTree2 = invertTree(tree);
                assert.strictEqual(invertedTree2.val, 1);
                assert.strictEqual(invertedTree2.left.val, 3);
                assert.strictEqual(invertedTree2.right.val, 2);
                assert.strictEqual(invertedTree2.right.right.val, 4);
            });
        });
    });
});
