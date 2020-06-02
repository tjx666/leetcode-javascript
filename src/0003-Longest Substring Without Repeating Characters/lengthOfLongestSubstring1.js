/**
 * 题述：给定一个字符串，请你找出其中不含有重复字符的 最长子串的长度。
 * 思路：使用一个数组维护滑动窗口
 * 时间复杂度：n², splice 时间复杂度 n
 * 空间复杂度：n，最复杂的情况就是整个字符串不带重复
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
    // 滑动窗口
    const win = [];
    let max = -Infinity;
    for (let i = 0, len = str.length; i < len; i++) {
        const index = win.indexOf(str[i]);
        if (~index) {
            max = Math.max(max, win.length);
            // 移除重复元素及其左侧元素
            win.splice(0, index + 1);
        }
        win.push(str[i]);
    }
    max = Math.max(max, win.length);
    return max;
}

module.exports = lengthOfLongestSubstring;
