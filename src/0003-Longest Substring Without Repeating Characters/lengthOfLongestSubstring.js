/**
 * 求最长连续子串的长度
 *
 * 滑动窗口解法
 * 使用 map 来存储遍历过的元素
 *
 * @param {string} str
 * @returns {number}
 * @example
 *
 * Input: "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 *
 */
function lengthOfLongestSubstring(str) {
    const { length } = str;
    if (length <= 1) {
        return length;
    }

    const map = new Map();
    let maxLen = 0;

    for (let j = 0, i = 0; j < length; j++) {
        if (map.has(str[j])) {
            // 例如 bcbklkb，当 i 是 l, j 是最后一个 b，这个 b 也会被判重复，此时不应该修改 i
            i = Math.max(map.get(str[j]), i);
        }

        maxLen = Math.max(maxLen, j - i + 1);
        map.set(str[j], j + 1);
    }

    return maxLen;
}

module.exports = lengthOfLongestSubstring;
