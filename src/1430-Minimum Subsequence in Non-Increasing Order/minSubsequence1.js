/**
 * 题述：非递增顺序的最小子序列，具体描述：https://leetcode-cn.com/problems/minimum-subsequence-in-non-increasing-order/
 * 思路：排序，从后往前累加到大于其他元素和，这样就能确保序列长度最短且和最大
 * 时间复杂度：取决于排序的时间复杂度，按最快 nlgn算
 * 空间复杂度：取决于排序复杂度，可以在需要额外的常量空间完成排序，也就是 1
 * @param {number[]} nums
 * @return {number[]}
 */
function minSubsequence(nums) {
    nums.sort((a, b) => a - b);

    let sum = 0;
    for (let i = nums.length - 1; i >= 0; i--) {
        sum += nums[i];
    }

    for (let i = nums.length - 1, acc = 0, sequence = []; i >= 0; i--) {
        acc += nums[i];
        sequence.push(nums[i]);
        if (acc > sum - acc) {
            return sequence;
        }
    }
}
