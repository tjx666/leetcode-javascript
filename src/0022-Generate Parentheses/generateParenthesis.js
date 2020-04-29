/**
 * 题述：输入 n，n 表示括号的对数，输出所有可能的括号组合
 * 思路：回溯法
 * 空间复杂度：n
 * @param {number} n
 * @return {string[]}
 * @example
 * 当 n = 3
 * [
 *  "((()))",
 *  "(()())",
 *  "(())()",
 *  "()(())",
 *  "()()()"
 * ]
 */
function generateParenthesis(n) {
    if (n <= 0) return [];

    const result = [];
    const path = [];
    function backTrace(left, right) {
        if (left === n && right === n) {
            return result.push(path.join(''));
        }

        if (left < n) {
            path.push('(');
            backTrace(left + 1, right);
            path.pop();
        }

        if (right < left) {
            path.push(')');
            backTrace(left, right + 1);
            path.pop();
        }
    }
    backTrace(0, 0, '');

    return result;
}
