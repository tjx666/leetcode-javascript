/**
 * 题述：
 * 给你一个数组 nums 。数组「动态和」的计算公式为：runningSum[i] = sum(nums[0]…nums[i]) 。
 * 请返回 nums 的动态和。
 * 条件：1 <= nums.length <= 1000
 * -10^6 <= nums[i] <= 10^6
 * 思路：原地修改
 * 时间复杂度：n
 * 空间复杂度：0
 * @param {number[]} nums
 * @return {number[]}
 */
function runningSum(nums) {
    for (let i = 0, len = nums.length; i < len; i++) {
        nums[i] += ~~nums[i - 1];
    }
}
