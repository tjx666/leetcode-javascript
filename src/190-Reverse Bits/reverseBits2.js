/**
 * 题述：反转二进制位
 * 思路：参考 0007-反转整数解法二
 * 时间复杂度：1，固定循环 32 次
 * 空间复杂度：1
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
function reverseBits(n) {
    let ans = 0;
    let i = 32;
    while (i-- > 0) {
        ans = (ans << 1) + (n & 1);
        n >>>= 1;
    }
    // 将负数转换成对应的无符号正整数
    return ans >>> 0;
}
