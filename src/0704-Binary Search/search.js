/**
 * 题述：二分查找
 * 思路：二分查找常用于在有序序列中搜索，不要将思想局限于数组，包括字符串有时也是可以用得上二分的
 * 时间复杂度： log₂n
 * 空间复杂度：0
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = ((left + right) / 2) | 0;

        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            return mid;
        }
    }

    return -1;
}
