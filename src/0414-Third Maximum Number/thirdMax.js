/* eslint-disable camelcase */

/**
 * 先做 0628-Maximum Product of Three Numbers，然后你就会做这道题
 *
 * @param {number[]} nums
 * @return {number}
 */
function thirdMax(nums) {
    let max = Number.MIN_SAFE_INTEGER;
    let max_max = Number.MIN_SAFE_INTEGER;
    let max_max_max = Number.MIN_SAFE_INTEGER;

    for (let i = 0, len = nums.length; i < len; i++) {
        if (nums[i] > max_max_max) {
            max = max_max;
            max_max = max_max_max;
            max_max_max = nums[i];
        }

        if (nums[i] !== max_max_max) {
            if (nums[i] > max_max) {
                max = max_max;
                max_max = nums[i];
            }

            if (nums[i] !== max_max) {
                if (nums[i] > max) max = nums[i];
            }
        }
    }

    return max === Number.MIN_SAFE_INTEGER ? max_max_max : max;
}
