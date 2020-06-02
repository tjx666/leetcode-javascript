/**
 * 题述：给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * 思路：解法二里层循环需要 n 的时间复杂度查找当前遍历元素在滑动窗口中是否已存在
 * 通过使用 map 来保存遍历过的每一个元素的下标信息，可以将查找时间降到常数级别
 * 时间复杂度：n
 * 空间复杂度：n
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
    const map = new Map();
    let max = -Infinity;
    let left = 0;
    let i = 0;
    for (; i < length; i++) {
        if (map.has(str[i])) {
            max = Math.max(max, i - left);
            left = Math.max(left, map.get(str[i]));
        }
        map.set(str[i], i + 1);
    }
    max = Math.max(max, i - left);
    return max;
}

module.exports = lengthOfLongestSubstring;
