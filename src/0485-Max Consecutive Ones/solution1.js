/**
 * 题述：求二进制数组中最大连续 1 的个数
 * 思路：循环累加
 * 时间复杂度：n
 * 空间复杂度：1
 * @param {number[]} nums
 * @return {number}
 */
function findMaxConsecutiveOnes(nums) {
    let max = 0;
    for (let i = 0, count = 0, len = nums.length; i < len; i++) {
        if (nums[i] === 0) {
            count = 0;
        } else {
            count++;
            max = Math.max(max, count);
        }
    }
    return max;
}
