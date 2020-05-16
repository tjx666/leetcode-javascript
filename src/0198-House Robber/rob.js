/**
 * 题述：打家劫舍
 * 思路：动态规划，盗取前 n 间房时，你可以选择盗取它，那么最大值就是 rob(n-2) + nums[n]，不盗取时就是 rob(n - 1)，取它俩之间更大的值
 * 时间复杂度：n
 * 空间复杂度：0
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
    let a = 0;
    let b = 0;
    for (let i = 0, len = nums.length; i < len; i++) {
        [a, b] = [b, Math.max(a + nums[i], b)];
    }
    return b;
}

console.log(rob([1, 2, 3, 1]));
