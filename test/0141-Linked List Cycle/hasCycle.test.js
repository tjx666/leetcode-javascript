const assert = require('assert');
const hasCycle1 = require('../../src/0141-Linked List Cycle/hasCycle1');
const hasCycle2 = require('../../src/0141-Linked List Cycle/hasCycle2');

describe('#0141-Linked List Cycle', () => {
    [hasCycle1, hasCycle2].forEach((hasCycle, index) => {
        describe(`hasCycle${index + 1}`, () => {
            it('should return false when head is null or only on node', () => {
                assert.strictEqual(hasCycle(null), false);
                assert.strictEqual(hasCycle({ val: 1, next: null }), false);
            });

            it('should return weather the link list has cycle', () => {
                const list1 = { val: 1, next: { val: 2, next: { val: 3, next: null } } };
                assert.strictEqual(hasCycle(list1), false);

                const list2 = { val: 1, next: { val: 2, next: { val: 3, next: null } } };
                const joinedNode = list2.next;
                list2.next.next.next = joinedNode;

                assert.strictEqual(hasCycle(list2), true);
            });
        });
    });
});
