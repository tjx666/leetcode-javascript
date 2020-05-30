const assert = require('assert');
const addTwoNumbers1 = require('../../src/0002-Add Two Numbers/addTwoNumbers1');
const addTwoNumbers2 = require('../../src/0002-Add Two Numbers/addTwoNumbers2');

describe('#0002- Add Two Numbers', () => {
    [addTwoNumbers1, addTwoNumbers2].forEach((addTwoNumbers, index) => {
        describe(`addTwoNumbers${index + 1}`, () => {
            it('should return the new list plus by two given list', () => {
                const list1 = { val: 9, next: { val: 6, next: null } };
                const list2 = {
                    val: 1,
                    next: { val: 3, next: { val: 9, next: { val: 9, next: null } } },
                };
                const list3 = addTwoNumbers(list1, list2);
                assert.strictEqual(list3.val, 0);
                assert.strictEqual(list3.next.val, 0);
                assert.strictEqual(list3.next.next.val, 0);
                assert.strictEqual(list3.next.next.next.val, 0);
                assert.strictEqual(list3.next.next.next.next.val, 1);
            });
        });
    });
});
