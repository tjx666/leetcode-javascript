/**
 * 题述：比较含退格的字符串, 给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 # 代表退格字符。
 * 注意：如果对空文本输入退格字符，文本继续为空。
 * 思路：用栈来模拟字符串的输入和删除
 * 时间复杂度：m + n
 * 空间复杂度：m + n， 当输入的字符串没有 #
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
function backspaceCompare(S, T) {
    return build(S) === build(T);
}

function build(str) {
    const stack = [];
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === '#') {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    return stack.join('');
}
