/**
 * 题述：反转数字，当转换后的数字不在 [−2**31,  2**31 − 1] 范围内时返回 0
 * 思路：
 * 如果是业务开发第一反应是将数字转换成字符数组再反转，最后再转换成 number
 * 2 ** 31 是 2147483648，考虑反转后最大是 999999991，还是小于 Number.MAX_SAFE_INTEGER
 * 所以这道题对于 JavaScript 来说没有溢出导致精度丢失问题，但是需要考虑超出范围返回 0 这一题目限制
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
    const flag = x < 0 ? -1 : 1;
    const result = flag * [...Math.abs(x).toString(10)].reverse().join('');
    const MAX_INTEGER = 2 ** 31 - 1;
    const MIX_INTEGER = -(MAX_INTEGER + 1);
    return result < MIX_INTEGER || result > MAX_INTEGER ? 0 : result;
}
