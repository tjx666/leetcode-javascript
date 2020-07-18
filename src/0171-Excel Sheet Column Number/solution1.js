/**
 * 题述：给定一个Excel表格中的列名称，返回其相应的列序号。
 * 思路：26 进制
 * 时间复杂度：n，n 为 s 的长度
 * 空间复杂度：1
 * @param {string} s
 * @return {number}
 */
function titleToNumber(s) {
    const codePointBeforeA = 'A'.codePointAt(0) - 1;
    let ans = s[0].codePointAt(0) - codePointBeforeA;
    for (let i = 1, len = s.length; i < len; i++) {
        ans = ans * 26 + s[i].codePointAt(0) - codePointBeforeA;
    }
    return ans;
}
