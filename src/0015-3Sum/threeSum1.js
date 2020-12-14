/**
 * seconds
 * 题述：给你一个包含 n 个整数的数组 nums, 判断 nums 中是否存在三个元素 a，b，c , 使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 * 思路：先排序
 * 时间复杂度： n的三次方，n 是 nums 长度
 * 空间复杂度：取决于排序的空间复杂度
 * @param {number[]} nums
 * @return {number[][]}
 * @example
 *
 * Input: nums = [-1, 0, 1, 2, -1, -4]，
 * Output:
 * [
 *   [-1, 0, 1],
 *   [-1, -1, 2]
 * ]
 *
 */
function threeSum(nums) {
    const { length } = nums;
    if (length < 3) return [];

    nums = nums.sort((a, b) => a - b);
    const combinations = [];
    for (let i = 0; i < length - 2; i++) {
        if (nums[i] > 0) return combinations;
        if (i !== 0 && nums[i] === nums[i - 1]) continue;
        for (let j = i + 1; j < length - 1; j++) {
            if (j !== i + 1 && nums[j] === nums[j - 1]) continue;
            for (let k = j + 1; k < length; k++) {
                if (k !== j + 1 && nums[k] === nums[k - 1]) continue;
                if (nums[i] + nums[j] + nums[k] === 0) {
                    combinations.push([nums[i], nums[j], nums[k]]);
                }
            }
        }
    }

    return combinations;
}
