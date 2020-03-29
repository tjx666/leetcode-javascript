const assert = require('assert');
const middleNode = require('../../src/0876-Middle of the Linked List/middleNode');

describe('#0876-Middle of the Linked List', () => {
    it('should return the middle node of given linkList', () => {
        let list = null;
        assert.strictEqual(middleNode(list), null);

        list = { val: 1, next: null };
        assert.strictEqual(middleNode(list), list);

        list.next = { val: 2, next: null };
        assert.strictEqual(middleNode(list), list.next);

        list.next.next = { vl: 3, next: null };
        assert.strictEqual(middleNode(list), list.next);
    });
});
