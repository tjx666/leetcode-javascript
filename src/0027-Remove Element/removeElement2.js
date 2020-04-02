/**
 * 双指针
 * 慢指针指向最后一个不重复元素的下标
 *
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
    let slow = -1;
    for (let fast = 0, len = nums.length; fast < len; fast++) {
        if (nums[fast] !== val) {
            nums[++slow] = nums[fast];
        }
    }

    return slow + 1;
}

module.exports = removeElement;
