/**
 * 有序又是搜索,而且还没重复，那不就是上二分嘛
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;

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
