/**
 * 题述：反转数字，当转换后的数字不在 [−2**31,  2**31 − 1] 范围内时返回 0
 * 思路：这道题主要是处理溢出麻烦一些
 * 时间复杂度：大小为 n 的数字需要遍历 ㏒₁₀n 次
 * 空间复杂度：0
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
    const MAX_INTEGER = 2 ** 31 - 1;
    const MIN_INTEGER = -(2 ** 31);

    let ans = 0;
    while (x > 0) {
        const pop = x % 10;
        if (ans > MAX_INTEGER / 10 || ans < MIN_INTEGER / 10) {
            return 0;
        }
        ans = ans * 10 + pop;
        x /= 10;
    }

    return ans;
}
