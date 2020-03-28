const assert = require('assert');
const deleteNode = require('../../src/0237-Delete Node in a Linked List/deleteNode');

describe('#0237-Delete Node in a Linked List', () => {
    it('should delete the given node', () => {
        const list = { val: 1, next: { val: 2, next: { val: 3, next: null } } };
        deleteNode(list.next);
        assert.strictEqual(list.val, 1);
        assert.strictEqual(list.next.val, 3);
        assert.strictEqual(list.next.next, null);
    });
});
