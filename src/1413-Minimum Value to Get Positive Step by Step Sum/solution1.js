/**
 * 题名：逐步求和得到正数的最小值
 * 条件：1 <= nums.length <= 100
 * 详述：
 * 给你一个整数数组 nums 。你可以选定任意的 正数 startValue 作为初始值。
 * 你需要从左到右遍历 nums 数组，并将 startValue 依次累加上 nums 数组中的值。
 * 请你在确保累加和始终大于等于 1 的前提下，选出一个最小的 正数 作为 startValue 。
 * 思路：遍历一遍，记录最小值 minSum，要求累计和始终不小于 1, 即： minSum + x >= 1，需要满足 x >= 1 - minSum
 * 时间复杂度：n
 * 空间复杂度：1
 * @param {number[]} nums
 * @return {number}
 */
function minStartValue(nums) {
    let minSum = nums[0];
    let sum = nums[0];
    for (let i = 1, len = nums.length; i < len; i++) {
        sum += nums[i];
        if (sum <= minSum) {
            minSum = sum;
        }
    }
    return Math.min(1, 1 - minSum);
}
