const assert = require('assert');
const getDecimalValue = require('../../src/1290-Convert Binary Number in a Linked List to Integer/getDecimalValue');

describe('#1290-Convert Binary Number in a Linked List to Integer', () => {
    it('should return the decimal value expressed by link list', () => {
        let list = null;
        assert.strictEqual(getDecimalValue(list), 0);

        list = { val: 0, next: null };
        assert.strictEqual(getDecimalValue(list), 0);

        list.next = { val: 1, next: null };
        assert.strictEqual(getDecimalValue(list), 1);

        list.next.next = { val: 0, next: null };
        assert.strictEqual(getDecimalValue(list), 2);

        list.next.next.next = { val: 1, next: null };
        assert.strictEqual(getDecimalValue(list), 5);
    });
});
