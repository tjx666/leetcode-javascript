/**
 * 题述：求最大连续子数组和
 * 思路：动态规划，参考这篇文章：https://zhuanlan.zhihu.com/p/92247861
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
