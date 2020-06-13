/**
 * 题述：给定长度为 2n 的数组, 你的任务是将这些数分成 n 对, 例如 (a1, b1), (a2, b2), ..., (an, bn) ，使得从 1 到 n 的 min(ai, bi) 总和最大。
 * 思路：先排序，相邻元素结成一对，贪心
 * 时间复杂度：取决于排序时间复杂度，最快 nlgn
 * 空间复杂度：取决于排序的空间复杂度，很多时间复杂度为 nlgn 的算法都不需要额外空间
 * @param {number[]} nums
 * @return {number}
 */
function arrayPairSum(nums) {
    nums.sort((a, b) => a - b);
    let sum = 0;
    // 把所有奇数位的元素值加起来就是结果
    for (let i = 0; i < nums.length - 1; i += 2) {
        sum += nums[i];
    }
    return sum;
}
