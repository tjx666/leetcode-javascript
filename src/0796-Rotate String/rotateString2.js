/**
 * 题述：给定两个字符串 A 和 B，判断 B 是否是 A 的旋转字符串之一
 * 思路：如果 B 是 A 的旋转字符串之一，那么一定是 A + A 的子串，例如 A: abcd, B: dabc，A + A: abcdabcd
 * 时间复杂度：n 为字符串长度, n²
 * 空间复杂度：n，
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
function rotateString(A, B) {
    return A.length === B.length && `${A}${A}`.includes(B);
}
