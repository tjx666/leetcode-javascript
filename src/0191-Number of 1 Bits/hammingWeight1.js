/**
 * 题述：获取无符号数中二进制表示中 1 的个数
 * 思路：遍历 32 个二进制位，每一位都和一个首位为 1 其它位为 0 的数进行与操作，结果为 0 说明该位是 0
 * 时间复杂度：遍历 32 次，所以是 O0
 * 空间复杂度：0
 * @param {number} n - a positive integer
 * @return {number}
 */
function hammingWeight(n) {
    let count = 0;
    let mask = 1;

    for (let i = 0; i < 32; i++) {
        if ((mask & n) !== 0) {
            count++;
        }

        mask <<= 1;
    }

    return count;
}
