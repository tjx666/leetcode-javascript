/**
 * 题述：给你一个整数数组 nums，请你返回其中位数为 偶数 的数字的个数。
 * 限制：
 * 1 <= nums.length <= 500
 * 1 <= nums[i] <= 10^5
 * 思路：
 * 其实这道题不管怎么样都要将 nums 遍历一遍，时间复杂度取决于判断一个数是否是有偶数位
 * 这里使用将数组转字符串的方式
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
        if (String(nums[i]).length % 2 === 0) count++;
    }
    return count;
}
