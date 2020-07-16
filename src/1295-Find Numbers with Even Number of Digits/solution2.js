/**
 * 题述：给你一个整数数组 nums，请你返回其中位数为 偶数 的数字的个数。
 * 限制：
 * 1 <= nums.length <= 500
 * 1 <= nums[i] <= 10^5
 * 思路：获取一个正整数的位数等于对于该数取 10 为底数的对数加一
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
        if ((~~Math.log10(nums[i]) + 1) % 2 === 0) count++;
    }
    return count;
}
