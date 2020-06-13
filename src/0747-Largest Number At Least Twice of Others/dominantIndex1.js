/**
 * 题述：至少是其他数字两倍的最大数
 * 思路：
 * 每个元素都有可能是最大数，因此至少将所有元素遍历一遍，时间复杂度不可能低于 n
 * 其实问题很简单，首先我们需要获取数组中的最大数，潘顿最大的数是否是所有数的两倍，最有可能不满足条件的就是和第二大的数比
 * 所以这道题就是考你能不能遍历一遍求出最大数和最小数
 * 时间复杂度：n，只遍历每个元素一次
 * 空间复杂度：1
 * @param {number[]} nums
 * @return {number}
 */
function dominantIndex(nums) {
    const { length } = nums;
    if (length === 0) return -1;
    if (length === 1) return 0;

    let firstMax = 0;
    let secondMax = null;
    for (let i = 1; i < length; i++) {
        if (nums[i] > nums[firstMax]) {
            secondMax = firstMax;
            firstMax = i;
        } else if (secondMax === null || nums[i] > nums[secondMax]) {
            secondMax = i;
        }
    }
    // 0 / 0 等于 NaN，正整数 / 0 等于 Infinity
    return nums[firstMax] === 0 || nums[firstMax] / nums[secondMax] >= 2 ? firstMax : -1;
}
