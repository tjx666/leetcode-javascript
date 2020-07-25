/**
 * 题述：删除字符串中的所有相邻重复项 II，相对于 I 来说这次是删除连续 K 个，之前是是两个
 * 思路：栈
 * 时间复杂度：n
 * 空间复杂度：n
 * @param {string} S
 * @param {number} k
 * @return {string}
 */
function removeDuplicates(S, k) {
    const { length } = S;
    const stack = [];
    for (let i = 0; i < length; i++) {
        const stackSize = stack.length;
        const top = stack[stackSize - 1];
        if (stackSize === 0 || S[i] !== top.char) {
            stack.push({ count: 1, char: S[i] });
        } else {
            ++top.count;
            if (top.count === k) stack.pop();
        }
    }
    let duplicatedStr = '';
    let front;
    while ((front = stack.shift())) {
        duplicatedStr += front.char.repeat(front.count);
    }
    return duplicatedStr;
}
