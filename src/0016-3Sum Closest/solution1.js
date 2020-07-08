/**
 * 题述：
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。
 * 返回这三个数的和。假定每组输入只存在唯一答案。
 * 思路：
 * 先做 0001-Two Sum 和 0015-3Sum 再来做这道就会觉得比较简单。
 * 我们可以先固定第一个数，那么剩下要选两个数，这个时候就将 Three Sum 转变成了 Two Sum 的题。
 * 在 Two Sum 中常用的优化手段有俩：
 * 1. 使用 map 保存遍历过的元素需要匹配的剩余值和自身下标，因为这道题并不需要三数之和和目标值相等，因此该手段不合适
 * 2. 排序 + 首尾双指针，本解法采用这种方式
 * 时间复杂度：n²，n 为 nums 长度
 * 空间复杂度：取决于排序算法空间复杂度
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b);
    let result;
    let minDiff = Infinity;
    for (let i = 0; i <= nums.length - 3; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            const diff = Math.abs(sum - target);
            if (diff < minDiff) {
                minDiff = diff;
                result = sum;
            }
            // 题目说了假定每组输入只存在唯一答案。
            if (sum === target) {
                return target;
            }

            if (sum > target) {
                right--;
            } else {
                left++;
            }
        }
    }
    return result;
}
