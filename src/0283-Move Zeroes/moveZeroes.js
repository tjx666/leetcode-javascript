/**
 * 将数组中的所有零移动到最后，并保持非零元素的原有顺序
 *
 * 该问题可以转换为删除数组中所有的 0，然后将后面的几个数置为 0
 * 双指针
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
    const { length } = nums;
    let slow = -1;
    for (let fast = 0; fast < length; fast++) {
        if (nums[fast] !== 0) {
            slow++;
            nums[slow] = nums[fast];
        }
    }

    for (let i = slow + 1; i < length; i++) {
        nums[i] = 0;
    }
}
