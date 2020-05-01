/**
 * 题述：不使用 + 和 -，计算 a 和 b 的和
 * 思路：
 * a 和 b 异或可以获得不进位的加结果
 * a 和 b 于再左进位一位可以获得进位位
 * 时间复杂度：0，数字的二进制位是固定的
 * 空间复杂度：0
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function getSum(a, b) {
    while (b !== 0) {
        [a, b] = [a ^ b, (a & b) << 1];
    }
    return a;
}
