/**
 * 题述：给定一个字符串，请你找出其中不含有重复字符的 最长子串的长度。
 * 思路：在理解解法 1 的基础上不借助额外的空间，而是通过一个 left 保存滑动窗口左指针
 * 时间复杂度：n², indexOf 时间复杂度 n
 * 空间复杂度：0
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
    let max = -Infinity;
    // 滑动窗口左指针
    let left = 0;
    let i = 0;
    for (; i < length; i++) {
        // 其实 slice 是会产生新的字符串，空间复杂度应该是 n²
        const existedIndex = str.slice(left, i).indexOf(str[i]);
        if (~existedIndex) {
            max = Math.max(max, i - left);
            left += existedIndex + 1;
        }
    }
    max = Math.max(max, i - left);
    return max;
}

module.exports = lengthOfLongestSubstring;
