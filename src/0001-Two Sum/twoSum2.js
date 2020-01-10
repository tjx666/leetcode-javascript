/**
 * 使用 hash 来存储遍历过程中获取的信息
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
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
