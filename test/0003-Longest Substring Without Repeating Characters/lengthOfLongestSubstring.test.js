const assert = require('assert');
const lengthOfLongestSubstring = require('../../src/0003-Longest Substring Without Repeating Characters/lengthOfLongestSubstring');

describe('#0003-Longest Substring Without Repeating Characters', () => {
    it('should return the length of longest subString', () => {
        assert.strictEqual(lengthOfLongestSubstring('bbbbb'), 1);
        assert.strictEqual(lengthOfLongestSubstring('abcabcbb'), 3);
        assert.strictEqual(lengthOfLongestSubstring('pwwkew'), 3);
        assert.strictEqual(lengthOfLongestSubstring('bcbklkb'), 4);
    });
});
