/**
 * 题述：两数之和
 * 思路：
 * 暴力法，穷举所有组合，两层循环，外层循环下标表示第一个数的下标，里层循环表示第二数下标，里层下标从外层下标 + 1 开始
 * 时间复杂度：n²，n 为 nums 长度，两层循环
 * 空间复杂度：1
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @example
 *
 * Input: nums = [2, 7, 11, 15], target = 9
 * Output: [0, 1] or [1, 0]
 *
 */
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) return [i, j];
        }
    }
}

module.exports = twoSum;
