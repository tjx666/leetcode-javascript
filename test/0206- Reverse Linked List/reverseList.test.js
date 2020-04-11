const assert = require('assert');

const reverseList1 = require('../../src/0206-Reverse Linked List/reverseList1');
const reverseList2 = require('../../src/0206-Reverse Linked List/reverseList2');

describe('#0206- Reverse Linked List', () => {
    [reverseList1, reverseList2].forEach((reverseList, index) => {
        describe(`#reverseList${index}`, () => {
            it('should reverse the given link list', () => {
                const testList = {
                    value: 1,
                    next: {
                        value: 2,
                        next: {
                            value: 3,
                            next: {
                                value: 4,
                                next: {
                                    value: 5,
                                    next: null,
                                },
                            },
                        },
                    },
                };
                const reversedList = reverseList(testList);
                assert.strictEqual(reversedList.value, 5);
                assert.strictEqual(reversedList.next.value, 4);
                assert.strictEqual(reversedList.next.next.value, 3);
                assert.strictEqual(reversedList.next.next.next.value, 2);
                assert.strictEqual(reversedList.next.next.next.next.value, 1);
                assert.strictEqual(reversedList.next.next.next.next.next, null);
            });
        });
    });
});
