/**
 * 题述：统计只含单一字母的子串
 * 思路：遍历一遍，如果当前字符和前一个相同，连续了 k 个，那么其实新增了 k 个满足条件的子串
 * 例如：
 * aaabbbccc 遍历到第三个 a 字符，这里设为 A，自身这个 A 算一个，A 和其它剩余的 k - 1 个连续的 a 可以组成 k - 1 个满足条件的子串
 * 也就是 aA, aaA
 * 时间复杂度：n
 * 空间复杂度：1
 * @param {string} S
 * @return {number}
 */
function countLetters(S) {
    const { length } = S;
    if (length <= 1) return length;
    let count = 1;
    for (let i = 1, sameCount = 1; i < length; i++) {
        if (S[i] === S[i - 1]) sameCount++;
        else sameCount = 1;
        count += sameCount;
    }
    return count;
}
