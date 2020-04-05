/**
 * 题目描述：
 * 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 *
 * 思路：既然要求的数个数大于二分之一，将 nums 排序后，要求的数必然是连续的，而且整个数组中间的数必然是要求的数
 *
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
    const sortedNums = nums.sort((a, b) => a - b);
    const middleIndex = ((nums.length - 1) / 2) | 0;
    return sortedNums[middleIndex];
}
