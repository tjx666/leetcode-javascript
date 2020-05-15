/**
 * 题述：求最大连续子数组和
 * 思路：贪心，使用 accSum 保存当前累加值，如果当前累加值不大于 0，说明继续累加对求解连续最大值已经没意义，于是将 accSum 设置为当前遍历值
 * 时间复杂度：n
 * 空间复杂度：0
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
    let accSum = nums[0];
    let answer = nums[0];

    for (let i = 1; i < nums.length; i++) {
        accSum = Math.max(accSum + nums[i], nums[i]);
        answer = Math.max(accSum, answer);
    }

    return answer;
}

module.exports = maxSubArray;
