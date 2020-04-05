/**
 * Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.
 *
 * @param {number[]} nums
 * @return {number}
 * @example
 *
 * Input: [3,0,1]
 * Output: 2
 */
function missingNumber(nums) {
    let sum = (nums.length * (1 + nums.length)) / 2;
    for (let i = 0, len = nums.length; i < len; i++) {
        sum -= nums[i];
    }
    return sum;
}
