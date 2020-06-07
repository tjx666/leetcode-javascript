/**
 * 题述：反转二进制位
 * 思路：参考 0007-反转整数解法1
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
function reverseBits(n) {
    return Number.parseInt([...Math.abs(n).toString(2).padStart(32, '0')].reverse().join(''), 2);
}
