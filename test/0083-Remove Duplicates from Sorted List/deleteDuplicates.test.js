const assert = require('assert');
const deleteDuplicates = require('../../src/0083-Remove Duplicates from Sorted List/deleteDuplicates');

describe('#0083-Remove Duplicates from Sorted List', () => {
    it('should delete the duplicated nodes', () => {
        const list = { val: 1, next: { val: 3, next: { val: 3, next: { val: 4, next: null } } } };
        deleteDuplicates(list);
        assert.strictEqual(list.val, 1);
        assert.strictEqual(list.next.val, 3);
        assert.strictEqual(list.next.next.val, 4);
    });
});
