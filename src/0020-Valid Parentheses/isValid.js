/**
 * 题述：
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 有效字符串需满足：
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 注意空字符串可被认为是有效字符串。
 *
 * 思路：利用栈的后进先出
 * 时间复杂度：遍历一遍，所以是 n
 * 空间复杂度：借助了栈存储遍历过的元素，所以是 n
 *
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
    const { length } = s;
    if (length % 2 !== 0) return false;

    const mapper = new Map([
        [')', '('],
        ['}', '{'],
        [']', '['],
    ]);
    const stack = [];
    for (let i = 0; i < length; i++) {
        if (!mapper.has(s[i])) {
            stack.push(s[i]);
        } else if (stack.pop() !== mapper.get(s[i])) {
            return false;
        }
    }

    return stack.length === 0;
}
