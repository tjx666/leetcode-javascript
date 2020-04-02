/**
 * 双指针
 * 使用慢指针保存最后遍历到的不用的元素
 *
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
    const { length } = nums;
    if (length <= 1) {
        return length;
    }

    let slow = 0;
    for (let fast = 1; fast < length; fast++) {
        if (nums[fast] !== nums[slow]) {
            slow++;
            nums[slow] = nums[fast];
        }
    }

    return slow + 1;
}

module.exports = removeDuplicates;
