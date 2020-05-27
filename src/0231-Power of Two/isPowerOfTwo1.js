/**
 * 题述：判断一个数是不是 2 的幂
 * 思路：最容易想到的是不断除以2，最后能得到 2 就是 2 的幂
 * 时间复杂度： log₂n
 * 空间复杂度：0
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfTwo(n) {
    if (n === 1) return true;
    if (n < 1) return false;

    while (n >= 2) {
        if (n % 2 !== 0) return false;
        n /= 2;
    }

    return true;
}
