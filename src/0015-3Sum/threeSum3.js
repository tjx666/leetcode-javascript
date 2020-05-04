/**
 * 题述：给你一个包含 n 个整数的数组 nums, 判断 nums 中是否存在三个元素 a，b，c , 使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 * 思路：排序 + 首尾双指针
 * 时间复杂度： n 的平方
 * 空间复杂度：0
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
        let left = i + 1;
        let right = length - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                combinations.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left + 1] === nums[left]) left++;
                while (left < right && nums[right - 1] === nums[right]) right--;
                left++;
                right--;
            } else if (sum > 0) {
                right--;
            } else {
                left++;
            }
        }
    }

    return combinations;
}
