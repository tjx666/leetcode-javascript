/**
 * 题述：
 * 给出一个按 非递减 顺序排列的数组 nums，和一个目标数值 target。
 * 假如数组 nums 中绝大多数元素的数值都等于 target，则返回 True，否则请返回 False。
 * 所谓占绝大多数，是指在长度为 N 的数组中出现必须 超过 N/2 次。
 * 思路：先二分查找到目标数最小下标 index，再判断 nums[index + nums.length / 2] 是否是目标数即可
 * 时间复杂度：lgn
 * 空间复杂度：1
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
function isMajorityElement(nums, target) {
    const { length } = nums;
    let left = 0;
    let right = length - 1;
    while (left <= right) {
        const mid = ((left + right) / 2) | 0;
        const val = nums[mid];
        if (val >= target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return nums[left] === target && nums[left + Math.floor(length / 2)] === target;
}
