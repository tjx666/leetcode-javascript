/**
 * 题述：一个非空整数数组，由任意对整数和一个没有重复的整数组成，例如 [1, 1, 2, 2, 3]，求这个不重复的整数
 * 思路：利用异或位运算的特点，任意整数 i 和 0 异或结果为 i, 任意整数 i 和 i 异或结果为 0
 * 时间复杂度：n
 * 空间复杂度： 0
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
    return nums.reduce((acc, item) => acc ^ item);
}
