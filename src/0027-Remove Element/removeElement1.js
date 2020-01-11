/**
 * 双指针
 *
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
    const { length } = nums;
    let i = 0;

    for (let j = 0; j < length; j++) {
        if (nums[j] !== val) {
            nums[i] = nums[j];
            i++;
        }
    }

    nums.length = i;

    return i;
}

module.exports = removeElement;
