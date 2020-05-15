/**
 * 题述：求最大连续子数组和
 * 思路：动态规划，参考这篇文章：https://zhuanlan.zhihu.com/p/92247861
 * 用动态规划求解需要先考虑另一个问题：如何求解以一个 end 为结尾的所有子数组中最大和
 * 再将这个元素 end 由第一个元素迭代到最后一个元素是不是就穷尽出所有组合中最大和了？
 * 时间复杂度：n
 * 空间复杂度：0
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
    let answer = nums[0];
    let currentMax = nums[0];
    for (let i = 1, len = nums.length; i < len; i++) {
        currentMax = Math.max(currentMax + nums[i], nums[i]);
        answer = Math.max(answer, currentMax);
    }
    return answer;
}

module.exports = maxSubArray;
