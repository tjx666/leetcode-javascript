/**
 * 题述：
 * 给你一个整数数组 A 和一个整数 K，请在该数组中找出两个元素，使它们的和小于 K 但尽可能地接近 K，返回这两个元素的和。
 * 如不存在这样的两个元素，请返回 -1。
 * 思路：暴力法
 * 时间复杂度：n²，总遍历次数是 1 + 2 + ... + (n - 1) = (1 + n - 1) * n / 2 = n²/2
 * 空间复杂度;0
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 * @example
 *
 * Input: A = [34,23,1,24,75,33,54,8], K = 60
 * Output: 58
 *
 * Input: A = [10,20,30], K = 15
 * Output: -1
 *
 */
function twoSumLessThanK(A, K) {
    let resSum = -Infinity;
    for (let i = 0, len = A.length; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            const sum = A[i] + A[j];
            if (sum < K && sum > resSum) {
                resSum = sum;
            }
        }
    }

    return resSum === -Infinity ? -1 : resSum;
}
