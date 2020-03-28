const assert = require('assert');
const removeElements = require('../../src/0203-Remove Linked List Elements/removeElements');

describe('#0203-Remove Linked List Elements', () => {
    it('should remove the node whose value equals to given value', () => {
        const list = {
            val: 1,
            next: {
                val: 2,
                next: {
                    val: 6,
                    next: {
                        val: 3,
                        next: {
                            val: 4,
                            next: {
                                val: 5,
                                next: {
                                    val: 6,
                                    next: null,
                                },
                            },
                        },
                    },
                },
            },
        };
        removeElements(list, 6);
        assert.strictEqual(list.val, 1);
        assert.strictEqual(list.next.val, 2);
        assert.strictEqual(list.next.next.val, 3);
        assert.strictEqual(list.next.next.next.val, 4);
        assert.strictEqual(list.next.next.next.next.val, 5);
        assert.strictEqual(list.next.next.next.next.next, null);
    });
});
