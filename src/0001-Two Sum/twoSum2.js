/**
 * 题述：两数之和
 * 思路：可以使用 map 保存之前遍历过程中获得的信息，这道题我们可以在遍历过程中我们可以保存键值对 key-value
 * key 为 target - nums[i], value 为 i
 * 时间复杂度：n，n 为 nums 长度，遍历一遍即可，map 的访问速度为常数级时间复杂度
 * 空间复杂度：n，最复杂的情况是需要遍历到最后一个元素，需要保存 n 个元素
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @example
 *
 * Input: nums = [2, 7, 11, 15], target = 9
 * Output: [0, 1] or [1, 0]
 *
 */
function twoSum(nums, target) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        const firstNumIndex = map[nums[i]];
        if (firstNumIndex !== undefined) {
            return [firstNumIndex, i];
        }

        const left = target - nums[i];
        map[left] = i;
    }
}

module.exports = twoSum;

twoSum([3, 1, 6], 9);
