const assert = require('assert');
const mergeTwoLists1 = require('../../src/0021-Merge Two Sorted Lists/mergeTwoLists1');
const mergeTwoLists2 = require('../../src/0021-Merge Two Sorted Lists/mergeTwoLists2');

describe('#0021-Merge Two Sorted Lists', () => {
    [mergeTwoLists1, mergeTwoLists2].forEach((mergeTwoLists, index) => {
        describe(`#mergeTwoLists${index + 1}`, () => {
            it('should return merged list when all is null', () => {
                const l1 = null;
                const l2 = null;
                assert.strictEqual(mergeTwoLists(l1, l2), null);
            });

            it('should return merged list when someone is null', () => {
                const l1 = { val: 2, next: null };
                const l2 = null;
                assert.strictEqual(mergeTwoLists(l1, l2).val, 2);
            });

            it('should return merged list', () => {
                const l1 = { val: 2, next: { val: 3, next: null } };
                const l2 = { val: 1, next: { val: 3, next: { val: 4, next: null } } };
                const mergedList1 = mergeTwoLists(l1, l2);
                assert.strictEqual(mergedList1.val, 1);
                assert.strictEqual(mergedList1.next.val, 2);
                assert.strictEqual(mergedList1.next.next.val, 3);
                assert.strictEqual(mergedList1.next.next.next.val, 3);
                assert.strictEqual(mergedList1.next.next.next.next.val, 4);
                assert.strictEqual(mergedList1.next.next.next.next.next, null);

                const l3 = { val: 1, next: { val: 3, next: { val: 4, next: null } } };
                const l4 = { val: 2, next: { val: 3, next: null } };
                const mergedList2 = mergeTwoLists(l3, l4);
                assert.strictEqual(mergedList2.val, 1);
                assert.strictEqual(mergedList2.next.val, 2);
                assert.strictEqual(mergedList2.next.next.val, 3);
                assert.strictEqual(mergedList2.next.next.next.val, 3);
                assert.strictEqual(mergedList2.next.next.next.next.val, 4);
                assert.strictEqual(mergedList2.next.next.next.next.next, null);
            });
        });
    });
});
