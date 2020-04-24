/**
 * 题述：获取无符号数中二进制表示中 1 的个数
 * 思路：因为 n 和 n - 1 与操作会将 n 中最后一个 1 置为 0
 *
 * @param {number} n - a positive integer
 * @return {number}
 */
function hammingWeight(n) {
    let count = 0;
    while (n !== 0) {
        count++;
        n &= n - 1;
    }

    return count;
}
