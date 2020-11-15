/**
 * 题述：移掉K位数字，是的其最小
 * 思路：关键是要要知道如何确定一个位上的数字是否该移除，从前往后遍历时，
 * 如果是单调递增的，不能确定这些数字是否该移除，例如 1， 2， 3, 3 不能确定是否被移除，可能后面来个 4， 124 比 123 大
 * 但是如果出现小于前一个数的情况，例如 2, 4, 3，这个 4 肯定是要移除的， 4 是高位，而且被 3 补上
 * 贪心：固定是移除 k 位，越高位被移除越任意得到最小的数
 * 这道题用到的栈很有意思，是单调递增的
 * 时间复杂度：n + k
 * 空间复杂度：n
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
function removeKdigits(num, k) {
    if (num === '0' || k === 0) return num;

    const stack = [parseInt(num[0], 10)];
    for (let i = 1; i < num.length; i++) {
        const charNum = parseInt(num[i], 10);

        while (charNum < stack[stack.length - 1] && stack.length !== 0 && k !== 0) {
            stack.pop();
            k--;
        }

        if (charNum !== 0 || stack.length !== 0) {
            stack.push(charNum);
        }
    }

    while (k !== 0) {
        stack.pop();
        k--;
    }

    return stack.length === 0 ? '0' : stack.join('');
}
