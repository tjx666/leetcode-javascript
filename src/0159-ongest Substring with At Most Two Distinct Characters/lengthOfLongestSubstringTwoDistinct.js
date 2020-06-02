/**
 * 题述：给定一个字符串 s ，找出 至多 包含两个不同字符的最长子串 t ，并返回该子串的长度。
 * 思路：快慢双指针维护一个滑动窗口 + map
 * 时间复杂度：n
 * 空间复杂度：0
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstringTwoDistinct(s) {
    const { length } = s;
    if (length <= 2) return length;

    const map = new Map();
    let maxLen = 2;
    let left = 0;
    let right = -1;
    while (++right < length) {
        if (map.size < 3) {
            map.set(s[right], right);
        }

        if (map.size === 3) {
            maxLen = Math.max(maxLen, right - left);
            // values 最多长度为 3
            const farLeftIndex = Math.min(...map.values());
            map.delete(s[farLeftIndex]);
            left = farLeftIndex + 1;
        }
    }
    maxLen = Math.max(maxLen, right - left);
    return maxLen;
}
