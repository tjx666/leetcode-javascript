/**
 * 题述： 数组中两元素的最大乘积
 * 给你一个整数数组 nums，请你选择数组的两个不同下标 i 和 j，使 (nums[i]-1)*(nums[j]-1) 取得最大值。
 * 请你计算并返回该式的最大值。
 * 思路：遍历一遍，找出最大的两个值和最小的两个值，对应减一后的可能最大的两个正数和最小的两个负数
 * 时间复杂度：n
 * 空间复杂度：1
 * @param {number[]} nums
 * @return {number}
 */
function maxProduct(nums) {
    const { length } = nums;
    let firstMax = -Infinity;
    let secondMax = -Infinity;
    let firstMin = Infinity;
    let secondMin = Infinity;
    for (let i = 0; i < length; i++) {
        const value = nums[i];
        if (value > firstMax) {
            secondMax = firstMax;
            firstMax = value;
        } else if (value > secondMax) {
            secondMax = value;
        }

        if (value < firstMin) {
            secondMin = firstMin;
            firstMin = value;
        } else if (value < secondMin) {
            secondMin = value;
        }
    }
    return Math.max((firstMax - 1) * (secondMax - 1), (firstMin - 1) * (secondMin - 1));
}
