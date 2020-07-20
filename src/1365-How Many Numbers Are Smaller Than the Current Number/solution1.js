/**
 * 题述：有多少小于当前数字的数字
 * 条件：
 * 2 <= nums.length <= 500
 * 0 <= nums[i] <= 100
 * 思路：题目限制了数据全为正整数，可以考虑使用计数数组来解决
 * 时间复杂度：n, n 为 nums 长度
 * 空间复杂度：1, 长度为 101 的数组是固定空间
 * @param {number[]} nums
 * @return {number[]}
 * @example
 *
 * Input: nums = [6,5,4,8]
 * Output: [2,1,0,3]
 *
 */
function smallerNumbersThanCurrent(nums) {
    const { length } = nums;
    if (length === 0) return [];

    const countStat = new Array(101).fill(0);
    for (let i = 0; i < length; i++) {
        const val = nums[i];
        const count = ~~countStat[val];
        countStat[val] = count + 1;
    }

    for (let i = 1; i < 101; i++) {
        countStat[i] += countStat[i - 1];
    }

    for (let i = 0; i < length; i++) {
        nums[i] = nums[i] === 0 ? 0 : countStat[nums[i] - 1];
    }
    return nums;
}
