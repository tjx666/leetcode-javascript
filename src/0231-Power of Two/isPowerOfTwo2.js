/**
 * 题述：判断一个数是不是 2 的幂
 * 思路：
 * 如果一个数是 2 的幂，它的二进制数一定是最高位 1，其他位是 0
 * n & n - 1 的结果是将 n 最右边的 1 置 0，
 * 如果 n & n-1 等于 0, 说明 n 只有一个 1，只有一个 1 也说明 n 是 2 的幂
 * 时间复杂度： log₂n
 * 空间复杂度：0
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfTwo(n) {
    return n >= 1 && (n & (n - 1)) === 0;
}
