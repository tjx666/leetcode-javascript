/**
 * 题述：给你一个包含 n 个整数的数组 nums, 判断 nums 中是否存在三个元素 a，b，c , 使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 * 思路：将三数之和转换成两数之和，排序是为了方便去重，两数之和这里采用 map
 * 时间复杂度： n 平方
 * 空间复杂度：n
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
    const map = new Map();
    for (let i = 0; i < length - 2; i++) {
        if (nums[i] > 0) return combinations;
        if (i !== 0 && nums[i] === nums[i - 1]) continue;
        const target = 0 - nums[i];
        map.clear();
        for (let j = i + 1; j < length; j++) {
            const value = nums[j];
            const secondIndex = map.get(value);
            if (secondIndex != null) {
                if (secondIndex !== -1) {
                    combinations.push([nums[i], nums[secondIndex], value]);
                    map.set(value, -1);
                }
            } else {
                map.set(target - nums[j], j);
            }
        }
    }
    return combinations;
}
