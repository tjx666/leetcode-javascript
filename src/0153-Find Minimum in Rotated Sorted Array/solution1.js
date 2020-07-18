/**
 * 题述：寻找旋转排序数组中的最小值
 * 思路：
 * 数据规模是 n，扫描一遍就能找到最小值，但是这样的时间复杂度是 n，一般继续优化就是优化到 lgn 也就是二分，再优化就是常数级
 * 考虑到数据是有序的，可以使用 二分
 * 时间复杂度：lgn
 * 空间复杂度：1
 * @param {number[]} nums
 * @return {number}
 */
function findMin(nums) {
    const { length } = nums;
    if (length === 0) return null;
    if (length === 1) return nums[0];

    // 单增 1 2 3 4
    if (nums[length - 1] > nums[0]) return nums[0];
    // 单减 4 3 2 1
    if ((length === 2 && nums[1] < nums[0]) || (nums[1] < nums[0] && nums[2] < nums[1])) {
        return nums[length - 1];
    }

    let left = 0;
    let right = nums.length - 1;
    // 例如 0 1 2 3 4 5
    //     4 5 6 1 2 3
    //     4 5 1
    while (left < right) {
        const mid = ((left + right) / 2) | 0;

        if (nums[mid] === nums[left]) return nums[left + 1];

        if (nums[mid] > nums[left]) {
            left = mid;
        } else if (nums[mid] < nums[right]) {
            right = mid;
        }
    }
}
