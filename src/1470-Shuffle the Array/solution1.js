/**
 * 题述：
 * 给你一个数组 nums ，数组中有 2n 个元素，按 [x1,x2,...,xn,y1,y2,...,yn] 的格式排列。
 * 条件：
 * 1 <= n <= 500
 * nums.length == 2n
 * 1 <= nums[i] <= 10^3
 * 请你将数组按 [x1,y1,x2,y2,...,xn,yn] 格式重新排列，返回重排后的数组。
 * 思路：
 * 如果想要空间复杂度为 o1，可以遍历多遍，第一遍标记，第二遍赋值，这里由条件可知 nums[i] 是小于 1000 的正整数，只用到了 10 个二进制位
 * 我们可以遍历第一遍，将当前位置 i 对应的要插入的位置 j 的再高 10 位（10 ~ 19）用来保存当前元素值，低 10 位（0 ~ 9) 还是原本的值
 * 再遍历一遍将每一个元素值右移 10 位即可
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
        const j = i < n ? 2 * i : (i - n) * 2 + 1;
        nums[j] |= (nums[i] & 1023) << 10;
    }
    for (let i = 0; i < len; i++) {
        nums[i] >>>= 10;
    }
    return nums;
}
