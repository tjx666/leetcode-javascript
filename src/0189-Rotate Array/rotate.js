/**
 * 旋转数组
 *
 * 思路：旋转 k 个位置，可以每次旋转一个位置，重复 k 次
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * @example
 *
 * Input: [1,2,3,4,5,6,7] and k = 3
 * Output: [5,6,7,1,2,3,4]
 * Explanation:
 * rotate 1 steps to the right: [7,1,2,3,4,5,6]
 * rotate 2 steps to the right: [6,7,1,2,3,4,5]
 * rotate 3 steps to the right: [5,6,7,1,2,3,4]
 *
 */
function rotate(nums, k) {
    const { length } = nums;
    for (let i = 0; i < k; i++) {
        let previous = nums[length - 1];
        for (let j = 0; j < length; j++) {
            const temp = nums[j];
            nums[j] = previous;
            previous = temp;
        }
    }
}
