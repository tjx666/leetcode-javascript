/**
 * 首尾双指针
 *
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
    let n = nums.length;
    let i = 0;

    while (i < n) {
        if (nums[i] === val) {
            nums[i] = nums[n - 1];
            n--;
        } else {
            i++;
        }
    }

    nums.length = n;

    return n;
}

module.exports = removeElement;
