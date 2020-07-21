/**
 * 题述：
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
 * 你的算法时间复杂度必须是 O(log n) 级别。如果数组中不存在目标值，返回 [-1, -1]。
 * 思路：二分
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
    const left = findTarget(nums, target, true);
    if (~left) {
        return [left, findTarget(nums, target, false)];
    }
    return [-1, -1];
}

function findTarget(nums, target, min) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = ((left + right) / 2) | 0;
        const value = nums[mid];
        if (value === target) {
            if (min) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else if (value > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    if (min && nums[left] === target) return left;

    if (!min && nums[right] === target) return right;

    return -1;
}
