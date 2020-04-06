/* eslint-disable camelcase */

/**
 * 求数组中任意三个数组合中乘积最大积
 *
 * 这个其实是道数学题，最大的积等于最大的三个数的乘积或者最大的数和最小的两个数的乘积之中更大的那个
 *
 * @param {number[]} nums
 * @return {number}
 */
function maximumProduct(nums) {
    // 最小数
    let min_min = Number.MAX_SAFE_INTEGER;
    // 倒数第二小的数
    let min = Number.MAX_SAFE_INTEGER;
    // 倒数第三大的数
    let max = Number.MIN_SAFE_INTEGER;
    // 倒数第二大的数
    let max_max = Number.MIN_SAFE_INTEGER;
    // 最大的数
    let max_max_max = Number.MIN_SAFE_INTEGER;

    for (let i = 0, len = nums.length; i < len; i++) {
        if (nums[i] < min_min) {
            min = min_min;
            min_min = nums[i];
        } else if (nums[i] < min) {
            min = nums[i];
        }

        if (nums[i] > max_max_max) {
            max = max_max;
            max_max = max_max_max;
            max_max_max = nums[i];
        } else if (nums[i] > max_max) {
            max = max_max;
            max_max = nums[i];
        } else if (nums[i] > max) {
            max = nums[i];
        }
    }

    return Math.max(~~(max * max_max * max_max_max), ~~(max_max_max * min * min_min));
}
