/**
 * 题述：
 * 在一个「平衡字符串」中，'L' 和 'R' 字符的数量是相同的。
 * 给出一个平衡字符串 s，请你将它分割成尽可能多的平衡字符串。
 * 返回可以通过分割得到的平衡字符串的最大数量。
 * 思路：题目描述很模糊，看几个测试用例你就会发现其实很简单
 * 时间复杂度：n
 * 空间复杂度：0
 * @param {string} s
 * @return {number}
 * @example
 *
 * Input: s = "RLRRLLRLRL"
 * Output: s = "RLRRLLRLRL"
 *
 * Input: s = "RLLLLRRRLR"
 * Output: 3
 *
 * Input: s = "LLLLRRRR"
 * Output: 1
 */
function balancedStringSplit(s) {
    const { length } = s;
    let count = 0;
    for (let i = 1, temp = 0; i < length; i++) {
        temp += s[i] === 'L' ? 1 : -1;
        if (temp === 0) count++;
    }
}
