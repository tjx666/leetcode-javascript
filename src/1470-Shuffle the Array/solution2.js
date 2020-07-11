/**
 * 题述：
 * 给你一个数组 nums ，数组中有 2n 个元素，按 [x1,x2,...,xn,y1,y2,...,yn] 的格式排列。
 * 条件：
 * 1 <= n <= 500
 * nums.length == 2n
 * 1 <= nums[i] <= 10^3
 * 请你将数组按 [x1,y1,x2,y2,...,xn,yn] 格式重新排列，返回重排后的数组。
 * 思路：原地修改，使用取负做标记
 * 时间复杂度: n
 * 空间复杂度：1
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 * @example
 *
 * 0  1  2  3  4  5  6  7
 * x1 x2 x3 x4 y1 y2 y3 y4
 * x1 y1 x2 y2 x3 y3 x4 y4
 *
 */
function shuffle(nums, n) {
    if (n === 1) return nums;
    const len = 2 * n;
    for (let i = 0; i < len; i++) {
        if (nums[i] > 0) {
            let j = i;
            while (nums[i] > 0) {
                j = j < n ? j * 2 : (j - n) * 2 + 1;
                [nums[i], nums[j]] = [nums[j], nums[i]];
                nums[j] *= -1;
            }
        }
    }
    for (let i = 0; i < len; i++) {
        nums[i] = Math.abs(nums[i]);
    }
    return nums;
}
