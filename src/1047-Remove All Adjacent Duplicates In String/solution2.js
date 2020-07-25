/**
 * 题述：删除字符串中的所有相邻重复项
 * 思路：栈，将每一个字符往栈中推，如果当前字符和栈顶元素相同就不入栈
 * 时间复杂度：n，n 为 S 的长度
 * 空间复杂度：n
 * @param {string} S
 * @return {string}
 */
function removeDuplicates(S) {
    const { length } = S;
    const stack = [];
    for (let i = 1; i < length; i++) {
        const stackSize = stack.length;
        if (stackSize === 0 || S[i] !== stack[stackSize - 1]) {
            stack.push(S[i]);
        } else {
            stack.pop();
        }
    }
    return stack.join('');
}

removeDuplicates('abbaca');
