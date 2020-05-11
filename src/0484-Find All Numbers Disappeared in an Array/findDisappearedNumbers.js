/**
 * 题述：消失的数字
 * 思路：遍历 nums，将当前值对应的位置的值设置为负值，重新遍历一遍 nums，值为正数的位置对应的值便是消失的的数字
 * 时间复杂度: n
 * 空间复杂度：0
 * @param {number[]} nums
 * @return {number[]}
 */
function findDisappearedNumbers(nums) {
    const { length } = nums;
    for (let i = 0; i < length; i++) {
        const valueIndex = Math.abs(nums[i]) - 1;
        if (nums[valueIndex] > 0) nums[valueIndex] = -nums[valueIndex];
    }

    const result = [];
    for (let i = 0; i < length; i++) {
        if (nums[i] > 0) {
            result.push(i + 1);
        }
    }

    return result;
}
