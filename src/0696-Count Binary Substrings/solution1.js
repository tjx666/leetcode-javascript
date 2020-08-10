/**
 * 题述：
 * 给定一个字符串 s，计算具有相同数量0和1的非空(连续)子字符串的数量，并且这些子字符串中的所有0和所有1都是组合在一起的。
 * 重复出现的子串要计算它们出现的次数。
 * 条件：
 * s.length 在1到50,000之间。
 * s 只包含“0”或“1”字符。
 * 思路：其实只要统计连续相同 0 或 1 的个数
 * 时间复杂度：n
 * 空间复杂度: 1
 * @param {string} s
 * @return {number}
 * @example
 *
 * Input: 000111
 * Output: 01, 0011, 000111 共 3 个
 *
 */
function countBinarySubstrings(s) {
    let result = 0;
    let lastCount = 0;
    let count = 1;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            count++;
        } else {
            result += Math.min(lastCount, count);
            lastCount = count;
            count = 1;
        }
    }
    result += Math.min(lastCount, count);
    return result;
}
