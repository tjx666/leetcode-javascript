/**
 * 题述：给你一个整数数组 nums，请你返回其中位数为 偶数 的数字的个数。
 * 限制：
 * 1 <= nums.length <= 500
 * 1 <= nums[i] <= 10^5
 * 思路：充分利用实际条件 nums[i] 小于 10^5，直接通过枚举范围来计算
 * @param {number[]} nums
 * @return {number}
 * @example
 *
 * Input: nums = [12,345,2,6,7896]
 * Output: 2
 *
 * Input: nums = [555,901,482,1771]
 * Output: 1
 *
 */
function findNumbers(nums) {
    let count = 0;
    for (let i = 0, len = nums.length; i < len; i++) {
        const val = nums[i];
        const isBitCountEven =
            (val >= 10 && val <= 99) || (val >= 1000 && val < 9999) || val === 100000;
        if (isBitCountEven) count++;
    }
    return count;
}
