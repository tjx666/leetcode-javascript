/**
 * 双指针
 *
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
    const { length } = nums;
    if (length === 0) return 0;

    let head = 0;
    for (let tail = 1; tail < length; tail++) {
        if (nums[tail] !== nums[head]) {
            head++;
            nums[head] = nums[tail];
        }
    }

    const resultLength = head + 1;
    nums.length = resultLength;

    return resultLength;
}

module.exports = removeDuplicates;
