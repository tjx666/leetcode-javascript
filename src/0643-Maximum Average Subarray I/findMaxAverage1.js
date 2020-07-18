/**
 * 题述：求数组连续 k 的元素的最大平均值
 * 思路：太简单了，按部就班就行
 * 时间复杂度; n
 * 空间复杂度：1
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findMaxAverage(nums, k) {
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }

    let max = sum;
    for (let i = k; i < nums.length; i++) {
        sum += nums[i] - nums[i - k];
        max = Math.max(max, sum);
    }
    return max / 4;
}
