/**
 * 题述：反转字符串，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
 * 思路：首尾双针
 * 算法复杂度：n
 * 空间复杂度：1
 *
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseString(s) {
    for (let head = 0, tail = s.length - 1; head < tail; head++, tail--) {
        [s[head], s[tail]] = [s[tail], s[head]];
    }
}
