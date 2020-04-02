/**
 * 二分
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
    const { length } = nums;

    if (length === 0) return 0;
    let left = 0;
    let right = length - 1;

    while (left <= right) {
        const middle = ((left + right) / 2) | 0;
        const middleValue = nums[middle];
        if (target > middleValue) {
            left = middle + 1;
        } else if (target < middleValue) {
            right = middle - 1;
        } else {
            return middle;
        }
    }

    return left;
}

module.exports = searchInsert;
