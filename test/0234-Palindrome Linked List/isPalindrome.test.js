const assert = require('assert');
const isPalindrome1 = require('../../src/0234-Palindrome Linked List/isPalindrome1');
const isPalindrome2 = require('../../src/0234-Palindrome Linked List/isPalindrome2');

describe('#0234-Palindrome Linked List', () => {
    [isPalindrome1, isPalindrome2].forEach((isPalindrome, index) => {
        describe(`isPalindrome${index + 1}`, () => {
            it('should return weather the link list is palindrome', () => {
                let list = null;
                assert.strictEqual(isPalindrome(list), true);

                list = { val: 1, next: null };
                assert.strictEqual(isPalindrome(list), true);

                list.next = { val: 2, next: null };
                assert.strictEqual(isPalindrome(list), false);

                list.next.next = { val: 3, next: { val: 2, next: { val: 1, next: null } } };
                assert.strictEqual(isPalindrome(list), true);
            });
        });
    });
});
