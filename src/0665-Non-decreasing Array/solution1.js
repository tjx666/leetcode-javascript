/**
 * 题述：给你一个长度为 n 的整数数组，请你判断在 最多 改变 1 个元素的情况下，该数组能否变成一个非递减数列。
 * 条件：
 * 1 <= n <= 10 ^ 4
 * - 10 ^ 5 <= nums[i] <= 10 ^ 5
 * 思路：
 * 如果碰到当前数 nums[i] 小于前面的数 nums[i - 1]，可以调整的方式有两种:
 * 1. 改变前一个数使得 nums[i - 2] <= nums[i - 1] <= nums[i], 不能成功的条件是 nums[i] < nums[i - 2]
 * 2. 改变当前数使得 nums]i - 1] <= nums[i] <= nums, 一定会导致出问题的条件是 nums[i - 1] > nums[i + 1]
 * 时间复杂度：n，n 为 nums 长度
 * 空间复杂度：0
 * @param {number[]} nums
 * @return {boolean}
 */
function checkPossibility(nums) {
    let changed = false;
    for (let i = 1, len = nums.length; i < len; i++) {
        if (nums[i] < nums[i - 1]) {
            if (changed) return false;
            changed = true;

            if (i !== 1 && i !== len - 1 && nums[i] < nums[i - 2] && nums[i - 1] > nums[i + 1]) {
                return false;
            }
        }
    }
    return true;
}
